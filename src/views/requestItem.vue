<template>
    <!-- ======= mainPanel ======= -->
    <main id="main" class="main ">
        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card mb-3 col-12">
                        <div class="card-body d-flex justify-content-between align-items-center mt-3">
                            <div class="txt">
                                <h4>Request Item</h4>
                                <nav>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/">Dashboard </a></li>
                                        <li class="breadcrumb-item"><a href="/LISTEVENT">List event </a></li>
                                        <li class="breadcrumb-item"><a href="REQUESTITEM"> <span
                                                    style="color:rgba(17, 134, 203, 1)">Request</span></a></li>
                                    </ol>
                                </nav>
                            </div>

                            <div class="btn btn-createEvent shadow-none d-block d-mg-flex d-lg-flex">
                                <button type="button" class="btn btn-dark btn-sm w-100 m-1"
                                    style="background: rgba(10, 80, 122, 1);">Save as draft</button>
                                <a href="/LISTEVENT"><button type="button" class="btn btn-primary btn-sm w-100 m-1"
                                        style="background:rgba(17, 134, 203, 1)">Request</button></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="">
                <section class="section row">
                    <div class=" col-12 col-md-12 col-lg-6 p-3">
                        <div class="card-body card h-100 p-3">
                            <form class="row g-3" method="POST">
                                <div class="col-12">
                                    <label for="date" class="form-label p-1">Date</label>
                                    <input type="date" class="form-control shadow-none" name="startDate" id="startDate"
                                        placeholder="25-jun-2024">
                                </div>
                                <div class="col-12">
                                    <label for="reference" class="form-label p-1">Reference</label>
                                    <input type="text" name="reference" class="form-control shadow-none" id=""
                                        placeholder="Reference">
                                </div>
                                <div class="col-12">
                                    <label for="warehouse" class="form-label p-1">Warehouse</label>
                                    <select class=" form-select shadow-none" name="warehouse" id="warehouse">
                                        <option value="Warehouse1">Warehouse1</option>
                                    </select>
                                </div>
                            </form>
                            <div class="addItem d-flex justify-content-end">
                                <a href="/ADDITEM"><button type="button"
                                        class="btn btn-primary mt-3 mb-3 btn-sm color-white"
                                        style="background:rgba(17, 134, 203, 1)"><i class="bi bi-plus-lg"></i>Add
                                        Iem</button></a>
                            </div>
                            <div class="card card-request shadow-none border-0">
                                <table class="table table-Request col-12 col-md-12 col-lg-12">
                                    <thead>
                                        <tr>
                                            <th scope="col">&numero;</th>
                                            <th scope="col">Item Name</th>
                                            <th scope="col">Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">
                                                <div class="boxId">1</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img src="https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg"
                                                        alt="" height="25px">
                                                    <p class="m-1">Chair</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                        <div class="num">10</div>
                                                        <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <i class="bi bi-trash3"></i>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="boxId">2</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img src="https://cdn.shopify.com/s/files/1/0507/6793/products/callway_1_1024x1024.JPG?v=1484592087"
                                                        alt="" height="25px">
                                                    <p class="m-1">Sofa</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                        <div class="num">10</div>
                                                        <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <i class="bi bi-trash3"></i>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <div class="boxId">3</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img src="https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg"
                                                        alt="" height="25px">
                                                    <p class="m-1">Chair</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                        <div class="num">10</div>
                                                        <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <i class="bi bi-trash3"></i>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <div class="boxId">3</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img src="https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg"
                                                        alt="" height="25px">
                                                    <p class="m-1">Chair</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                        <div class="num">10</div>
                                                        <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <i class="bi bi-trash3"></i>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <div class="boxId">4</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img src="https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg"
                                                        alt="" height="25px">
                                                    <p class="m-1">Chair</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                        <div class="num">10</div>
                                                        <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <i class="bi bi-trash3"></i>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <div class="boxId">5</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img src="https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg"
                                                        alt="" height="25px">
                                                    <p class="m-1">Chair</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                        <div class="num">10</div>
                                                        <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <i class="bi bi-trash3"></i>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <div class="boxId">6</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img src="https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg"
                                                        alt="" height="25px">
                                                    <p class="m-1">Chair</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                        <div class="num">10</div>
                                                        <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <i class="bi bi-trash3"></i>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <div class="boxId">7</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img src="https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg"
                                                        alt="" height="25px">
                                                    <p class="m-1">Chair</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                        <div class="num">10</div>
                                                        <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <i class="bi bi-trash3"></i>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <div class="boxId">8</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img src="https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg"
                                                        alt="" height="25px">
                                                    <p class="m-1">Chair</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                        <div class="num">10</div>
                                                        <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <i class="bi bi-trash3"></i>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <div class="boxId">9</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img src="https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg"
                                                        alt="" height="25px">
                                                    <p class="m-1">Chair</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                        <div class="num">10</div>
                                                        <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <i class="bi bi-trash3"></i>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <div class="boxId">10</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img src="https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg"
                                                        alt="" height="25px">
                                                    <p class="m-1">Chair</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                        <div class="num">10</div>
                                                        <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <i class="bi bi-trash3"></i>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <div class="boxId">11</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img src="https://www.ikea.com/us/en/images/products/nordviken-chair-antique-stain__0832454_pe777681_s5.jpg"
                                                        alt="" height="25px">
                                                    <p class="m-1">Chair</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                        <div class="num">10</div>
                                                        <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <i class="bi bi-trash3"></i>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div class="col-12 col-md-12  col-lg-6 p-3">
                        <div class="card-body card h-100 p-3">
                            <!-- Vertical Form -->
                            <form class="row g-3" method="POST">
                                <label for="description" class="form-label p-1 ">Event description</label>
                                <div class="content-txt d-flex justify-content-center align-items-center">
                                    <div class="textfield shadow-none col-10 " style="position: relative;">
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
                                </div>

                                <p class="mt-3" style="color: rgba(102, 112, 133, 0.75);">Add a long description for
                                    your Event </p>
                            </form>
                            <!-- Vertical Form -->

                            <label for="additonalImg form-label" class="mt-3 mb-0">Attachment file</label>

                            <div class="col-12 col-md-12 col-lg-12 d-flex justify-content-center">
                                <div class=" form-control d-flex justify-content-around align-items-center">
                                    <div
                                        class="m-3 d-flex justify-content-center align-items-center p-1 dashed-border w-50">
                                        <div class="contentBox ">
                                            <div class="iconUpload d-flex justify-content-center"><i
                                                    class="bi bi-cloud-upload-fill"></i></div>
                                            <p class="d-flex justify-content-center text-align-center">Drag & Drop File
                                                here</p>
                                            <div class="iconUpload d-flex justify-content-center"><button type="button"
                                                    class="btn btn-dark btn-sm mb-1 d-flex justify-content-center">Upload
                                                    File</button></div>
                                        </div>

                                    </div>
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
<script>
export default {
    name: 'requestItem',
    props: {
        msg: String
    }
}
</script>