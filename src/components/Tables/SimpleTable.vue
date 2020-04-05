<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Vorname">{{ item.prename }}</md-table-cell>
        <md-table-cell md-label="Nachname">{{ item.surname }}</md-table-cell>
        <md-table-cell md-label="Klasse">{{ item.class_title }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        
      ]
    };
  }
};
</script>
