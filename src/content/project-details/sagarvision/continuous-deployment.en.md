I built a CI/CD workflow around the Unity client to validate changes and deliver repeatable Android and Windows builds.

## CI (Continuous Integration)

![SagarVision CI Gate Flow](images_videos/sagarvision/cicd/ci_gate_flow.png)

Each Draft PR push runs a GitHub Actions gate against the latest commit.

### Required Quality Gates

- Static analysis checks compilation, Unity anti-patterns, C# reliability, performance, security, and conventions.
- Unity EditMode unit tests run before PlayMode integration tests against the actual C++ server.
- A failed gate stops downstream jobs and blocks unverified changes.

![GitHub Actions CI Pipeline](images_videos/sagarvision/cicd/github_actions_pipeline.png)

### Automated Outputs

After the required gates pass, the Draft PR becomes ready for review. The pipeline also generates a CycloneDX SBOM and an RTM-mapped test report, then combines them into a traceable CI artifact.

## CD (Continuous Delivery)

- Created custom build tooling for repeated client delivery.
- Reduced setup mistakes across Android and Windows builds.
- Organized logs, version information, and delivery artifacts more consistently.
