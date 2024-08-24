<template>
    <!-- ======= mainPanel ======= -->
    <main id="main" class="main">
        <section>
        <div class="row g-0 mb-3">
          <div class="card">
            <div class="card-body d-flex justify-content-around align-items-center">
              <div class="col-3 col-md-5 col-lg-9">
                <p class="card-title"> Event</p>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/listEvent">List
                                Event</router-link></li>
                        <li class="breadcrumb-item"><router-link to="/listEvent/listRequest"><span
                                    style="color:rgba(17, 134, 203, 1)">List
                                    Request</span></router-link></li>
                    </ol>
                </nav>
              </div>
              <div class="col-5 col-md-5 col-lg-3 d-lg-flex d-md-flex d-block  btn-createEvent shadow-none">
                <a type="button" class="btn filter border-0 bg-white m-1  btn-sm"><i
                        class="bi bi-filter"></i> Filter</a>
                <a type="button" class="btn border-black btn-sm m-1 "><i
                        class="bi bi-cloud-download "></i> Export</a>
                <router-link to="/listEvent" class="btn btnSavePublish btn-sm m-1"><i
                        class="bi bi-plus-lg"></i>
                    AddEvent
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section class="section">
            <div class="row d-flex mt-3">
                <section class="section">
                    <div class="card">
                        <div class="card-body">
                            <table class="table table_listrequest">
                                <thead>
                                    <tr style="font-size: 11px; padding: 1px;">
                                        <th>&numero; <i class="bi bi-arrow-down"></i> </th>
                                        <th>Date<i class="bi bi-arrow-down"></i> </th>
                                        <th>Reference No <i class="bi bi-arrow-down"></i> </th>
                                        <th>Event Name <i class="bi bi-arrow-down"></i> </th>
                                        <th>Location <i class="bi bi-arrow-down"></i> </th>
                                        <th>Number of Item <i class="bi bi-arrow-down"></i> </th>
                                        <th>Status <i class="bi bi-arrow-down"></i> </th>
                                        <th>Image <i class="bi bi-arrow-down"></i> </th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody style="font-size: 12px;">
                                    <tr v-for="event in events" :key="event.id">
                                        <td>{{ [event.id].length }}</td>
                                        <td>{{ event.startDate }}</td>
                                        <!-- <td>1NCCCCC</td> -->
                                         <td>{{ event.ref }}</td>
                                        <td>{{ event.title }}</td>
                                        <td style="font-family: Hanuman;">{{ event.address }}</td>
                                        <!-- <td>100</td> -->
                                         <td>100</td>
                                        <td>
                                            <input type="checkbox" checked="checked" id="favorite" name="favorite-checkbox" value="favorite-button">
                                            <label for="favorite" class="container">
                                            <div class="action">
                                                <span class="option-1"><img src="../assets/images/Badgebase.png" alt=""></span>
                                                <span class="option-2"><img src="../assets/images/Badge.png" alt=""></span>
                                            </div>
                                            </label>                                                                                                    
                                        </td>
                                        <td>
                                            <img :src="event.image" alt=""
                                                height="25px">
                                        </td>
                                        <td class="iconView">
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><router-link to="/listEvent/listRequest" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/listEvent/listRequest/returnItem" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/listEvent/listRequest/deposeItem" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="pagination d-flex justify-content-end">
                                <div class="boxcontent d-flex justify-content-between align-items-center">
                                    <a href="" type="button"><i class="bi bi-chevron-left"></i> </a>
                                    <a href="" type="button"
                                        style=" background: rgba(17, 134, 203, 1); color: white;">1</a>
                                    <p style="margin: 5px;">of</p>
                                    <a href="" type="button"
                                        style="border:1px solid rgba(17, 134, 203, 1); background: white; color:rgba(17, 134, 203, 1);">24</a>
                                    <a href="" type="button"><i class="bi bi-chevron-right"
                                            style="color: rgba(17, 134, 203, 1);"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </main>
    <!-- End mainPanel-->
</template>
<script setup>
import {  onMounted } from 'vue';
import { useEventsStore } from '@/stores/eventStore';

const eventsStore = useEventsStore();
const { events } = eventsStore;

onMounted(() => {
    eventsStore.fetchEvents();
});


</script>