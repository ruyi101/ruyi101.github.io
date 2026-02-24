---
layout: page
title: NanoGPT
description: An 11M-parameter GPT trained from scratch on Shakespeare and Hemingway
img: assets/img/proj_nanogpt.jpg
importance: 3
category: machine learning
related_publications: false
---

Built and trained a **nano GPT** language model (11M parameters) from scratch, exploring transformer architecture fundamentals.

**Architecture:**
- Decoder-only transformer with **6 causal multi-head self-attention blocks**
- 2-layer linear language model head
- Custom **Byte Pair Encoding (BPE)** tokenizer trained on Shakespeare's works

**Training:**
- Tokenizer trained on Shakespeare corpus
- Language model fine-tuned on **Ernest Hemingway's** works

This project deepened understanding of transformer internals — from attention mechanics and positional embeddings to tokenization and autoregressive sampling.

**GitHub:** [ruyi101/NanoGPT](https://github.com/ruyi101/NanoGPT)
