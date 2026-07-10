The graphics work for SagarVision AR System focused on making surgical-assistance information readable in AR. I connected tracking data, model-surface projection, RenderTexture compositing, and HLSL feedback into a stable visual layer.

## BVH Flow

![BVH-based real-time closest projection flow chart](images_videos/sagarvision-graphics-bvh-flow.svg)

The client prepared a mesh-query structure after loading bone models so probe positions could be projected onto the model surface quickly. This reduced the runtime cost of repeatedly finding the closest visible point.

## Real-Time Closest Projection

@[Real-time projection support demo](images_videos/videos/sagarvision-realtime-projection.mp4 "The surface closest point calculated by the BVH query updates in real time as the probe moves.")

Incoming tracking positions were converted into model-space feedback points. Those points were used to keep probe visuals attached to the bone surface and to drive acquisition or hover feedback in shaders.

- Kept the visible probe feedback anchored to the model surface.
- Passed projected local positions into highlighting and sampling effects.

## Resection Luma Keying And Outline

@[Resection luma keying and outline demo](images_videos/videos/sagarvision-outline-lightspot.mp4 "Cutting planes, outlines, and black-background removal are combined so AR HUD resection information remains readable.")

For resection guidance, cutting-plane visuals were composited into the AR HUD and cleaned up with luma keying so important information stayed visible. Outline effects helped separate surgical guidance from the bone model.

## Projection-Based Real-Time Highlighting

@[Projection-based real-time highlighting](images_videos/videos/sagarvision-realtime-highlighting.mp4 "Projected surface points are accumulated in model local space, and the shader highlights the surrounding area in real time.")

Projected surface positions were accumulated in local space and sent to HLSL materials. The GPU handled the highlight rendering, keeping the visual feedback responsive while the probe moved.

## Implementation Notes

- Reduced surface-projection cost for real-time AR feedback.
- Kept probe and highlight visuals stable on the model surface.
- Improved AR HUD readability with compositing and outline effects.
- Used shader-driven highlighting for landmark and surface-sampling states.
