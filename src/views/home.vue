<template>
    <!-- ======= mainPanel ======= -->
    <main id="main" class="main">
        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card col-lg-12">
                        <div
                            class="card-body card-txt d-flex justify-content-between align-items-center col-12 col-sm-12 col-md-12 col-lg-12 mt-3 ">
                            <div class="txt col-lg-9">
                                <p> Create Event</p>
                                <nav>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item">
                                            <router-link to="/">Dashboard</router-link>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div class="btn-createEvent shadow-none col-lg-3 mt-3 col-6">
                                <a href="#" type="button" class="btn btnSaveDraft btn-sm">Save as Draft </a>
                                <router-link to="/LISTEVENT" class="btn btnSavePublish btn-sm">
                                    Save & Publish
                                </router-link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
        <section class="section row">
            <div class=" col col-md-7 p-3">
                <div class="card-body card h-100">
                    <!-- Vertical Form -->
                    <form class="row g-1 mt-3" method="POST">
                        <div class="col-12">
                            <label for="Eventname" class="form-label p-1">Event Name</label>
                            <input type="text" name="Eventname" class="form-control shadow-none" id="Eventname"
                                placeholder="Cambodia Kun Khmer">
                        </div>
                        <div class="col-12">
                            <label for="eventCatorgory" class="form-label p-1">Event Catorgory</label>
                            <select class=" form-select shadow-none" name="eventCatorgory" id="eventCatorgory"
                                placeholder="Select Product Catorgory">
                                <option value="Male">Select Product Catorgory</option>
                            </select>
                        </div>
                        <div class="col-12 d-flex justify-content-around">
                            <div class="col-6 col-md-6 col-lg-6 p-1">
                                <label for="startDate" class="form-label">Sart Date</label>
                                <input type="date" class="form-control shadow-none" name="startDate" id="startDate">
                            </div>
                            <div class="col-6 col-md-6 col-lg-6 p-1">
                                <label for="endDate" class="form-label">End Date</label>
                                <input type="date" class="form-control shadow-none" name="endDate" id="endDate">
                            </div>

                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label p-1" name="addr">Address</label>
                            <input type="text" name="address" id="inputAddress" class="form-control shadow-none"
                                placeholder="address" autocomplete="street-address">
                        </div>
                        <div class="col-12">
                            <label for="description" class="form-label p-1 ">Event description</label>
                            <div class="textfield shadow-none" style="position: relative;">
                                <div class="icon mb-2" style="position: absolute; top: 0; padding: 10px;">
                                    <i class="bi bi-type-bold"></i>
                                    <i class="bi bi-type-underline"></i>
                                    <i class="bi bi-justify-left"></i>
                                    <i class="bi bi-justify"></i>
                                    <i class="bi bi-justify-right"></i>
                                    <i class="bi bi-link"></i>
                                </div>
                                <textarea class="form-control shadow-none pt-5" aria-label="With textarea"
                                    name="description" id="description" rows="5"
                                    placeholder="Your text goes here.."></textarea>
                            </div>
                            <p class="mt-3" style="color: rgba(102, 112, 133, 0.75);">Add a long description for your
                                Event </p>
                        </div>

                    </form><!-- Vertical Form -->
                </div>
            </div>
            <div class="col col-md-5 p-3">
                <div class="card-body card h-100">
                    <div
                        class="row mx-auto col-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center mt-3">
                        <div class=" form-control d-flex justify-content-center align-items-center">
                            <div class="m-3 d-flex justify-content-center align-items-center p-1 w-50">
                                <div class="icon"
                                    style="position: absolute; background-color: rgba(231, 243, 250, 1); top: 25px; right: 40px; width: 20px; height: 25px; display: flex; justify-content: center; align-items: center; border-radius: 3px;">
                                    <i class="bi bi-trash3"></i>
                                </div>
                                <div class="image">
                                    <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="m-3 additionalImg d-flex justify-content-start mx-auto">Additional Image</label>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-6  ">
                            <div
                                class=" form-control card d-flex justify-content-around align-items-center shadow-none">
                                <div class="m-3 d-flex justify-content-center align-items-center p-1 w-50">
                                    <div class="icon"
                                        style="position: absolute; background-color: rgba(231, 243, 250, 1); top: 3px; right: 3px; width: 20px; height: 25px; display: flex; justify-content: center; align-items: center; border-radius: 3px;">
                                        <i class="bi bi-trash3"></i>
                                    </div>
                                    <div class="image">
                                        <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                            width="50px">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-6">
                            <div
                                class="d-flex justify-content-around align-items-center shadow-none dashed-border h-75">
                                <div class="m-3 d-flex justify-content-center align-items-center p-1 w-50">
                                    <div class="image">
                                        <img src="../assets/images/Group 1138.png" alt="" width="60px">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </main>
    <!-- End mainPanel-->
</template>
<script>
export default {
    name: 'HomePage',
    props: {
        msg: String
    }
}
</script>
