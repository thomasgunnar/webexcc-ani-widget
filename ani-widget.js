// ani-widget.js (Webex Agent Desktop-kompatibel komponent via window.customComponents)

window.customComponents = window.customComponents || {};

window.customComponents["sa-ds-sdk"] = {
  props: ["accessToken", "outdialEp", "darkmode"],
  data() {
    return {
      ani: "Venter...",
      queue: "Ukendt",
      channel: "Ukendt",
      duration: "00:00",
      timer: null,
      startTime: null
    };
  },
  template: `
    <div :style="{ padding: '1rem', backgroundColor: darkmode ? '#1e1e1e' : '#f9f9f9', color: darkmode ? '#fff' : '#000' }">
      <h3 style="margin-top: 0">Indgående kontakt</h3>
      <div><strong>📞 ANI:</strong> {{ ani }}</div>
      <div><strong>🏷️ Kønavn:</strong> {{ queue }}</div>
      <div><strong>💬 Kanal:</strong> {{ channel }}</div>
      <div><strong>⏱️ Varighed:</strong> {{ duration }}</div>
    </div>
  `,
  mounted() {
    WebexCC.initialize().then(() => {
      WebexCC.onContactStarted((contact) => {
        this.ani = contact?.data?.ani || "Ukendt";
        this.queue = contact?.data?.queueName || "Ukendt";
        this.channel = contact?.data?.channelType || "Ukendt";
        this.startTimer();
      });

      WebexCC.onContactEnded(() => {
        this.resetFields();
        this.stopTimer();
      });
    });
  },
  methods: {
    startTimer() {
      this.startTime = new Date();
      this.timer = setInterval(() => {
        const now = new Date();
        const seconds = Math.floor((now - this.startTime) / 1000);
        const min = String(Math.floor(seconds / 60)).padStart(2, '0');
        const sec = String(seconds % 60).padStart(2, '0');
        this.duration = `${min}:${sec}`;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.duration = "00:00";
      this.startTime = null;
    },
    resetFields() {
      this.ani = "Venter...";
      this.queue = "Ukendt";
      this.channel = "Ukendt";
    }
  }
};
