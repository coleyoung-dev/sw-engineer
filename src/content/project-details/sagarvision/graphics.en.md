The graphics work for SagarVision AR System focused on making bone models, probes, cutting planes, and landmark acquisition states readable inside a surgical-assistance workflow. The work was not just visual polish: the Unity client had to project incoming tracking data onto the model surface quickly and pass those projected local coordinates into HLSL shaders.

## BVH Flow

![BVH-based real-time closest projection flow chart](images_videos/sagarvision-graphics-bvh-flow.svg)

The BVH is built once after the bone meshes are loaded. `ModelPositionerBase` reads the Femur and Tibia MeshFilters, caches vertex and triangle arrays per bone index, and computes an AABB for each triangle group. It then sorts triangle centroids on the longest axis, splits them into child nodes, and leaves four or fewer triangles in each leaf node.

At runtime, probe updates do not scan every triangle. The query starts from the current bone's BVH root, calculates the squared distance from the query point to each AABB, and prunes nodes that are already farther than the best known distance. Visiting the nearer child first makes bestSqDist shrink early, which reduces later branch checks.

Leaf nodes use `ClosestPointOnTriangle` to calculate the real closest point on the triangle surface. If the projected point lands inside the triangle, it is used directly. If it falls outside, it is clamped to the nearest edge or vertex. When the BVH is unavailable or invalid, the client falls back to brute-force triangle checks or Collider.ClosestPoint.

## Real-Time Closest Projection

@[Real-time projection support demo](images_videos/videos/sagarvision-realtime-projection.mp4 "The surface closest point calculated by the BVH query updates in real time as the probe moves.")

Probe positions arrive through UDP tracking or AR marker updates. In AR mode the input can be a world-space position, so the client first converts it into the current bone MeshRenderer's local space. `GetProjectionTrueClosestOnMesh` then queries the BVH and returns the best surface point.

The important part is that the client does not stop at a simple triangle-plane projection. In a surgical-assistance view, the visual feedback must remain stable near edges and outside the mesh surface, so the projection logic includes inside-triangle checks plus edge and vertex clamping. This keeps the light spot from jumping outside the model when the probe moves quickly.

The projected point is used in two places.

- The probe object position is updated so the visible pointer stays attached to the bone surface.
- Highlighting and surface sampling shaders receive local coordinate arrays for acquisition regions, progress states, and hover feedback.

## Resection Luma Keying And Outline

@[Resection luma keying and outline demo](images_videos/videos/sagarvision-outline-lightspot.mp4 "Cutting planes, outlines, and black-background removal are combined so AR HUD resection information remains readable.")

The Resection view renders the model and cutting planes through separate cutting cameras into RenderTextures, then composites those textures into the UI. RenderTextures can include a black background, which makes AR overlay information harder to read. To solve this, the UI material uses the `BlackAlphaRemover` shader for luma keying.

The luma keying shader converts RGB into luminance using Rec.709 weights, then reduces alpha with a threshold and softness range. Dark background pixels become transparent, while brighter cutting-plane and line information remains visible. This fit the AR HUD better than a fixed chroma key because the render target background is black and not tied to a specific key color.

Cutting planes are created from current and target plane positions and normals received from the server. `ResectionController` instantiates the required plane prefabs and changes camera pose, plane scale, and rotation for Femur distal, Tibial cutting, and AP cutting tabs. Current and target planes are placed on separate layers so cameras and materials can separate them cleanly.

The outline is applied by swapping the transformed bone model to an outline material. `OutlineAndLinearMask` and `OutlineAndCurveMask` calculate a rim value from the dot product of surface normal and view direction, then multiply it by a view-space position clipping mask. Femur and Tibia require different masking directions, so parameters such as `_IsUseXAxis`, `_IsReverse`, `_ClipingOffset`, and `_CurveStrength` control the visible outline region.

## Projection-Based Real-Time Highlighting

@[Projection-based real-time highlighting](images_videos/videos/sagarvision-realtime-highlighting.mp4 "Projected surface points are accumulated in model local space, and the shader highlights the surrounding area in real time.")

Highlighting is driven by model-local coordinates. After the probe input is projected to the closest surface point, `Surface` or `SectionController` stores the point in the `_CenterPoses` array and passes it into the material. In the shader, each fragment converts its world position back into object-local space and measures its distance from each center.

When the distance is inside `_Radius`, the shader lerps the base color toward the highlight color. In image-based landmark flows, up to five landmarks can distinguish target, hover, and complete states. In imageless surface sampling, up to 500 projected points can accumulate surface acquisition marks.

This keeps CPU work small. The CPU updates coordinate arrays and counts, while the GPU handles the visual blending in the fragment stage. As a result, the highlight stays anchored to the model's local coordinate system while the probe moves, and the displayed point remains stable even when the model transform changes.

## Implementation Notes

- Built the BVH once at mesh load time to reduce runtime projection cost.
- Handled inside-triangle, edge, and vertex cases in `ClosestPointOnTriangle` to prevent unstable projection results.
- Removed black RenderTexture backgrounds with luma keying for cleaner AR HUD compositing.
- Combined rim lighting and position-based clipping for clearer resection outlines.
- Passed projected local coordinate arrays into HLSL materials and calculated radius-based highlight masks on the GPU.
