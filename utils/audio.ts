import { Blob } from '@google/genai';

// Converts Float32Array (web audio standard) to Int16 PCM (Gemini requirement)
export function float32ToInt16(float32: Float32Array): Int16Array {
  const int16 = new Int16Array(float32.length);
  for (let i = 0; i < float32.length; i++) {
    const s = Math.max(-1, Math.min(1, float32[i]));
    int16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
  }
  return int16;
}

export function createBlob(data: Float32Array, sampleRate: number): Blob {
    const int16 = float32ToInt16(data);
    const lowByte = int16.buffer; // This gets the underlying ArrayBuffer
    // We need to base64 encode the ArrayBuffer
    
    let binary = '';
    const bytes = new Uint8Array(lowByte);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64Data = btoa(binary);

    return {
      data: base64Data,
      mimeType: `audio/pcm;rate=${sampleRate}`,
    };
}

export function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number, // Target sample rate
  numChannels: number
): Promise<AudioBuffer> {
    // Gemini returns PCM 16-bit little endian
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    
    // Create buffer at the context's rate or specified rate?
    // Usually Gemini sends 24k. We create a buffer of that size.
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    
    for (let channel = 0; channel < numChannels; channel++) {
        const channelData = buffer.getChannelData(channel);
        for (let i = 0; i < frameCount; i++) {
             // Convert int16 back to float32 [-1.0, 1.0]
            channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
        }
    }
    
    return buffer;
}