class AudioEngine {
  private ctx: AudioContext | null = null;
  private noiseNode: AudioNode | null = null;
  private oscNode: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying = false;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;

      // Generate warm pink/brownian noise for tape hum
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 0.15;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      // Low pass filter to create a warm, deep room tone
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      // Low frequency sub drone
      const subOsc = this.ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(55, this.ctx.currentTime); // 55Hz (A1) warm harmonic

      const subGain = this.ctx.createGain();
      subGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      const mainGain = this.ctx.createGain();
      mainGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

      noise.connect(filter);
      filter.connect(mainGain);

      subOsc.connect(subGain);
      subGain.connect(mainGain);

      mainGain.connect(this.ctx.destination);

      noise.start();
      subOsc.start();

      this.noiseNode = noise;
      this.oscNode = subOsc;
      this.gainNode = mainGain;
      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    try {
      if (this.gainNode && this.ctx) {
        this.gainNode.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.2);
        setTimeout(() => {
          if (this.noiseNode) (this.noiseNode as AudioBufferSourceNode).stop();
          if (this.oscNode) this.oscNode.stop();
          this.noiseNode = null;
          this.oscNode = null;
          this.isPlaying = false;
        }, 300);
      } else {
        this.isPlaying = false;
      }
    } catch {
      this.isPlaying = false;
    }
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const audioEngine = new AudioEngine();
