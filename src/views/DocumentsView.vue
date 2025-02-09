<template>
    <div>
      <h2>Documents</h2>
      <ul>
        <li v-for="(document, index) in documents" :key="index">
          {{ document.name }}
          <button class="btn btn-danger btn-sm" @click="deleteDocument(index)" aria-label="Delete document">
            Delete
          </button>
        </li>
      </ul>
      <form @submit.prevent="uploadDocument">
        <div class="form-group">
          <label for="docName">Document Name</label>
          <input
            type="text"
            v-model="newDocument.name"
            id="docName"
            class="form-control"
            required
            aria-label="Document name"
          />
        </div>
        <div class="form-group">
          <label for="fileUpload">File</label>
          <input type="file" id="fileUpload" class="form-control" required aria-label="Upload file" />
        </div>
        <button class="btn btn-primary mt-3" type="submit" aria-label="Upload document">Upload Document</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "DocumentsView",
    data() {
      return {
        documents: JSON.parse(localStorage.getItem("documents")) || [], // Load documents from localStorage
        newDocument: { name: "" },
      };
    },
    methods: {
      uploadDocument() {
        if (this.newDocument.name) {
          this.documents.push({ ...this.newDocument });
          this.saveDocuments(); // Save updated documents to localStorage
          this.newDocument = { name: "" };
        }
      },
      deleteDocument(index) {
        this.documents.splice(index, 1);
        this.saveDocuments(); // Save updated documents to localStorage
      },
      saveDocuments() {
        localStorage.setItem("documents", JSON.stringify(this.documents));
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  </style>
  