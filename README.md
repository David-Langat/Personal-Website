# David Langat — Engineering Portfolio & Technical Showcase

[![Deployment Status](https://img.shields.io/badge/Deployment-Live%20on%20GitHub%20Pages-0071e3?style=flat-square&logo=github)](https://david-langat.github.io/Personal-Website/)
[![License: MIT](https://img.shields.io/badge/License-MIT-black?style=flat-square)](LICENSE)

A high-performance personal engineering portfolio built to showcase end-to-end capabilities across **Machine Learning**, **Data Engineering**, **MLOps & Cloud Infrastructure**, and **Full-Stack Systems**.

**Live Application:** [https://david-langat.github.io/Personal-Website/](https://david-langat.github.io/Personal-Website/)

---

## Technology Stack & Engineering Competencies

This project and its featured systems demonstrate practical proficiency across the modern computational engineering stack:

### 1. Machine Learning & Deep Learning
* **Core Frameworks:** PyTorch, TensorFlow, Keras, JAX/Flax.
* **Large Language Models & GenAI:** Hugging Face Transformers, LoRA/QLoRA adapter tuning, speculative decoding, vLLM inference engine, FlashAttention-2 fused kernels.
* **Computer Vision & Multimodal:** Self-supervised contrastive learning, Dense segmentation (UNet++, Albumentations), 1D/3D Graph Neural Networks (PyTorch Geometric, RDKit).
* **Competitive Modeling & Ensembles:** LightGBM, XGBoost, CatBoost, Scikit-learn, Bayesian hyperparameter optimization (Optuna), multi-level stacking, and out-of-fold blending.
* **High-Throughput Serving:** Triton Inference Server, ONNX Runtime, INT8/FP8 quantization, TensorRT plugins for sub-millisecond P99 latency.

### 2. Data Engineering & Processing
* **High-Performance Dataframes:** Polars (multi-threaded columnar processing, lazy execution), NumPy, Pandas.
* **Distributed Data Systems:** PySpark, Apache Airflow for DAG orchestration, Apache Kafka for real-time telemetry streaming.
* **Relational & Vector Data:** SQL (analytical window functions, indexing, query optimization), PostgreSQL, Vector search embeddings.
* **Validation Schemes:** Stratified K-Fold, Purged Group Time-Series Split, leakage prevention, automated data drift monitoring.

### 3. MLOps, Cloud & Infrastructure
* **Containerization & Orchestration:** Docker, Kubernetes (EKS/GKE), Helm, container networking, and resource allocation.
* **Cloud Platforms:** AWS (SageMaker, EKS, EC2, S3), Google Cloud Platform (Vertex AI, Cloud Run).
* **GitOps & CI/CD:** GitHub Actions (automated testing, build artifacts, edge deployment), ArgoCD continuous delivery.
* **Experiment Tracking & Observability:** MLflow, Weights & Biases (WandB), Prometheus metrics, Grafana dashboards.
* **Systems Administration:** Linux environment configuration, systemd service management, secure shell automation, and enterprise VPN routing.

### 4. Languages & Environments
* **Python (Advanced):** Asynchronous programming, object-oriented design, custom packaging, profiling, and memory optimization.
* **SQL:** Complex queries, subqueries, aggregation, and relational schema modeling.
* **TypeScript & JavaScript:** Asynchronous DOM handling, event-driven architectures, client-side state management.
* **Systems Languages & Scripting:** Bash shell automation, C++ / CUDA kernels, Rust foreign function interface (FFI).

### 5. Web Engineering & Edge Delivery
* **Frontend Architecture:** Semantic HTML5, utility-first Tailwind CSS engine, responsive mobile-first component architecture.
* **Edge Delivery:** Zero-runtime overhead static asset compilation deployed via global edge CDN (GitHub Pages / Vercel), ensuring sub-second load times and high availability.

---

## Featured Systems & Implementations

The portfolio highlights architectural implementations across real-world workloads:

1. **TensorStream-v2:** High-throughput distributed tensor pipeline for real-time video stream embeddings utilizing PyTorch, Ray Clusters, and Rust FFI.
2. **KaggleAutoEnsemble:** Automated stacking and Bayesian blending framework for tabular and multimodal competitions with automated feature pruning.
3. **OmniEmbed-Vision:** Self-supervised vision-language contrastive pre-training framework with INT8 quantization and ONNX dynamic graph exports.
4. **CloudScale-MLOps:** GitOps-driven Kubernetes manifests for continuous model evaluation, canary rollouts, and automated drift detection.
5. **NeuroQuant-vLLM:** 4-bit KV-cache quantization engine integrated into vLLM PagedAttention kernels.
6. **RayFlow-Orchestrator:** Dynamic graph orchestration runtime coordinating multi-agent simulations across elastic Ray actor pools with ZeroMQ transport.

---

## Repository Structure

```
Personal_Website/
├── index.html                 # Production portfolio application
├── favicon.ico                # Site favicon
├── .nojekyll                  # GitHub Pages static routing bypass
├── assets/
│   └── images/
│       └── personal.jpg       # Profile portrait asset
├── .github/
│   └── workflows/
│       └── deploy.yml         # Automated GitHub Actions deployment pipeline
├── DESIGN.md                  # Baseline design tokens and specifications
├── PRODUCTION_LOG.md          # Architectural milestones and deployment audit trail
└── README.md                  # Technology stack and system documentation
```

---

## Author

**David Langat**  
*Machine Learning Engineer & Systems Architect*  
* **GitHub:** [@David-Langat](https://github.com/David-Langat)  
* **Live Portfolio:** [david-langat.github.io/Personal-Website](https://david-langat.github.io/Personal-Website/)
