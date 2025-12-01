<script setup lang="ts">
const { resume } = useResumeData()
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4 print:p-0 print:bg-white">
    <!-- A4 Container -->
    <div
      class="resume-container bg-white shadow-lg max-w-[210mm] min-h-[297mm] w-full print:shadow-none print:max-w-none">
      <!-- Single-column vertical stack -->
      <div class="flex flex-col p-6">
        <!-- Header with Photo + Name + Contact -->
        <ResumeHeader :basics="resume.basics" />

        <!-- Summary -->
        <ResumeSummary :summary="resume.basics.summary" />

        <!-- Experience -->
        <ResumeExperience :work="resume.work" />

        <!-- Education -->
        <ResumeEducation :education="resume.education" />

        <!-- Additional Information -->
        <ResumeAdditionalInfo :skills="resume.skills" :languages="resume.languages"
          :certifications="resume.certifications" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  .no-print {
    display: none !important;
  }

  .resume-container {
    width: 210mm;
    min-height: 297mm;
  }

  * {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  section {
    break-inside: avoid;
  }
}
</style>
