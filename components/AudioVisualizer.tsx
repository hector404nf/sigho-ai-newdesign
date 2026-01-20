import React, { useEffect, useRef } from 'react';

interface AudioVisualizerProps {
  analyser: AnalyserNode | null;
  isActive: boolean;
  color?: string;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ analyser, isActive, color = '#38bdf8' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !analyser) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);

      if (!isActive) {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         // Draw idle line
         ctx.beginPath();
         ctx.moveTo(0, canvas.height / 2);
         ctx.lineTo(canvas.width, canvas.height / 2);
         ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
         ctx.stroke();
         return;
      }

      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate average volume for glow effect
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      const avg = sum / bufferLength;

      // Draw bars
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      // Center the visualizer
      const centerX = canvas.width / 2;
      
      // We'll draw mirrored from center
      // Reduce point count for smoother look
      const points = 30;
      const step = Math.floor(bufferLength / points);

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      // Create a smooth curve
      for (let i = 0; i < points; i++) {
        const value = dataArray[i * step];
        const percent = value / 255;
        const height = percent * (canvas.height * 0.8);
        
        // Use a sine wave modulation to make it look organic
        const offset = Math.sin((i / points) * Math.PI) * height;
        
        const xPos = (i / points) * canvas.width;
        const yPos = (canvas.height / 2) - (offset / 2);
        
        // Draw bars instead of line for this style
        ctx.fillStyle = color;
        // Add glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
        
        const barW = (canvas.width / points) * 0.6;
        const barH = offset || 2; // Minimum height
        
        // Rounded bars
        ctx.fillRect(xPos, (canvas.height - barH) / 2, barW, barH);
        
        ctx.shadowBlur = 0;
      }
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [analyser, isActive, color]);

  return (
    <canvas 
      ref={canvasRef} 
      width={300} 
      height={100} 
      className="w-full h-full rounded-lg opacity-80"
    />
  );
};

export default AudioVisualizer;