---
title: "What Ails One Shot Image Segmentation: A Data Perspective"
collection: publications
category: conferences
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: 'Introducing class and salience bias that affects all current state of the art models'
date: 2022-10-01
venue: 'NeurIPS 2021: Datasets and Benchmarks Track'
slidesurl: 'https://slideslive.com/38969570/what-ails-oneshot-image-segmentation-a-data-perspective?ref=recommended'
paperurl: 'https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/file/5878a7ab84fb43402106c575658472fa-Paper-round2.pdf'
citation: 'Mayur Hemani*, Abhinav Patel*, Tejas Shimpi*, Anirudha Ramesh*, Balaji Krishnamurthy, in NeurIPS (Datasets and Benchmarks Track), 2021'
---
One-shot image segmentation (OSS) methods enable pixel-level labeling with minimal training data, typically using only one example per class. However, existing OSS methods suffer from Class Negative Bias (CNB), where non-target objects are treated as background, and Salience Bias (SB), which affects segmentation accuracy for less prominent target pixels. This research demonstrates that addressing CNB and SB can significantly enhance segmentation performance. To improve real-world applicability, a new evaluation dataset, Tiered One-shot Segmentation (TOSS), is introduced, based on PASCAL and FSS-1000 datasets. TOSS provides a uniform evaluation metric and better reflects OSS performance in practical applications, with experiments validating its effectiveness on several OSS models.