class GeminiPrompts:
    @staticmethod
    def get_video_sentiment_analysis_prompt() -> str:
        return """
You are an expert in multimodal sentiment analysis and bias detection for social media videos.

Analyze this video comprehensively across ALL modalities (visual, audio, text) and provide a detailed JSON response.

Your analysis should include:

1. **Overall Sentiment**: Score (-1.0 to 1.0), label, and confidence.
2. **Visual Analysis**: Emotions, manipulation tactics, visual sentiment score.
3. **Audio Analysis**: Transcript, tone, speech characteristics, audio sentiment score.
4. **Temporal Analysis**: Sentiment scores for 5-10 video segments.
5. **Bias & Manipulation**: Identify fear-mongering, selective framing, loaded language, etc.
6. **Contradictions**: Any mismatch between visuals and audio.

Return JSON in this structure:
{
  "overall": {"score": float, "label": str, "confidence": float},
  "visual": {"sentiment": str, "emotions": [str], "score": float},
  "audio": {"transcript": str, "tone": str, "score": float},
  "temporal": [{"start": float, "end": float, "score": float, "desc": str}],
  "bias": {"detected": bool, "types": [str], "evidence": [{"type": str, "desc": str, "time": float}]},
  "themes": [str]
}
"""

    @staticmethod
    def get_topic_bias_analysis_prompt(videos_summary: list) -> str:
        return f"""
Analyze bias across these {len(videos_summary)} videos on the same topic:
{videos_summary}

Detect:
1. Source-level bias patterns.
2. Echo chamber or polarization evidence.
3. Manipulation tactics across sources.
4. Competing narratives.

Return JSON structure with keys: source_biases, echo_chamber, polarization, narrative_analysis.
"""
