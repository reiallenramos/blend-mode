const vm = Vue.createApp({
  data() {
    return {
      hours: '00',
      minutes: '00',
      seconds: '00',
      blendMode: 'normal'
    }
  },
  methods: {
    scaleHeight(value) {
      const maxOriginal = 60;
      const maxNew = 195;
      return (value / maxOriginal) * maxNew;
    },
    updateTime() {
      setInterval(() => {
        let currentTime = new Date();
        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();
      }, 1000);
    }
  },
  computed: {
    box1Style() {
      let scaledHeight = this.scaleHeight(this.seconds);
      return `height: ${scaledHeight}px`;
    },
    boxBlendMode() {
      return `mix-blend-mode: ${this.blendMode}`;
    }
  },
  created() {
    this.updateTime();
  }
}).mount('#app')