// src/stores/itemsStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useEventsStore = defineStore('events', () => {
  const events = ref([]);
  const error = ref(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/events');
      events.value = response.data;
    } catch (err) {
      error.value = err.message;
      console.error('Error fetching data:', err);
    }
  };

  const addEvent = async (newEvent) => {
    try {
      const response = await axios.post('http://localhost:5000/events', newEvent);
      events.value.push(response.data); 
    } catch (err) {
      error.value = err.message;
      console.error('Error adding event:', err);
    }
  };
 
  return { events, error, fetchEvents, addEvent };
});
export const useAddStore = defineStore('items', () => {
  const items = ref([]);
  const itemCounts = ref({});
  const error = ref(null);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/items');
      items.value = response.data;
    } catch (err) {
      error.value = err.message;
      console.error('Error fetching data:', err);
    }
  };

  const increment = (itemId) => {
    if (!itemCounts.value[itemId]) {
      itemCounts.value[itemId] = 0;
    }
    itemCounts.value[itemId]++;
  };

  const decrement = (itemId) => {
    if (!itemCounts.value[itemId]) {
      itemCounts.value[itemId] = 0;
    }
    if (itemCounts.value[itemId] > 0) {
      itemCounts.value[itemId]--;
    }
  };


  return {
    items,
    itemCounts,
    fetchItems,
    increment,
    decrement,
  };
});