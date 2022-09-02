<template>
  <div>
    <h1>{{ test }}</h1>
    <div class="toConvas" ref="toConvas">
      <h2>Test convas mode</h2>
      <p>{{ test }}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit rerum laboriosam magnam delectus quaerat
        beatae, quibusdam eveniet pariatur minus. Deserunt at praesentium distinctio aut quisquam laboriosam incidunt
        ipsa alias.</p>
    </div>
    <div class="preview-header">
      <h2>Preview</h2>
      <button @click="downloadPreview">Download</button>
    </div>
    <div class="preview">
      <div class="preview-holder" ref="previewHolder"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

const toConvas = ref(null);
const previewHolder = ref(null);

const test = "Vue OK";

let download;

const downloadPreview = () => {
  if (download) {
    download();
  }
}

const refreshPreview = () => {
  html2canvas(toConvas.value, {
    scale: 5,
    width: 2481,
    height: 3508,
  }).then(function (canvas) {
    previewHolder.value.innerHTML = '';
    //previewHolder.value.appendChild(canvas);

    canvas.scale = 2;
    canvas.dpi = 600;

    download = () => {
      var imgData = canvas.toDataURL(
        'image/png');
      var doc = new jsPDF({
        unit: 'px',
        format: 'a4'
      });
      doc.addImage(imgData, 'PNG', 0, 0);
      doc.save('sample-file.pdf');
    }
  });
}

onMounted(() => {
  refreshPreview();
})
</script>
  