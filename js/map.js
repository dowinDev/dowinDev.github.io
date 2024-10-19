import {products} from './api.js';

// tt.setProductInfo('FoodSharing', '1.0');
// var map = tt.map({
//     key: 'szTHucPplAtuPjuDVkmfgcuJqgemDk6y',  // API Key của bạn
//     container: 'map',
//     center: [105.8342, 21.0278],  // Tọa độ trung tâm ( Hà Nội)
//     zoom: 12
// });
//
//
// // fuction tìm kiếm start
// function searchLocation(query) {
//     var apiKey = 'szTHucPplAtuPjuDVkmfgcuJqgemDk6y';
//     var url = `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(query)}.json?key=${apiKey}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             if (data.results && data.results.length > 1) {
//                 var firstResult = data.results[0];
//                 var location = {
//                     lng: firstResult.position.lon,
//                     lat: firstResult.position.lat,
//                 };
//                 map.setCenter(location);
//                 map.setZoom(14);
//             } else {
//                 alert('Không tìm thấy địa điểm nào.');
//             }
//         })
//         .catch(error => {
//             console.error('Có lỗi xảy ra:', error);
//         });
// }
// // fuction tìm kiếm end
// // Thêm control để điều khiển bản đồ
// map.addControl(new tt.NavigationControl());
// var markers = []; // Mảng để lưu trữ các marker đã được thêm
// var currentLocation; // Biến để lưu trữ vị trí hiện tại
// // Đánh dấu vị trí hiện tại của người dùng
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         currentLocation = {
//             lng: position.coords.longitude,
//             lat: position.coords.latitude
//         };
//         // Hiển thị vị trí hiện tại
//         var currentMarker = new tt.Marker({ element: createMarkerElement() })
//             .setLngLat(currentLocation)
//             .addTo(map);
//         map.setCenter(currentLocation); // Đặt trung tâm bản đồ vào vị trí hiện tại
//         map.setZoom(14); // Đặt zoom lớn hơn để dễ thấy vị trí
//         // Hiển thị thông tin tọa độ hiện tại
//         var infoDiv = document.getElementById('info');
//         infoDiv.innerHTML = 'Vị trí hiện tại: ' + currentLocation.lat + ', ' + currentLocation.lng;
//     }, function () {
//         alert('Không thể lấy vị trí hiện tại.');
//     });
// } else {
//     alert('Trình duyệt của bạn không hỗ trợ Geolocation. Vui lòng mở trang web trên một trình duyệt khác!!!');
// }
// // Thêm sự kiện click cho nút "Đi tới vị trí hiện tại"
// document.getElementById('currentLocationButton').addEventListener('click', function () {
//     if (currentLocation) {
//         map.setCenter(currentLocation); // Đặt trung tâm bản đồ tại vị trí hiện tại
//         map.setZoom(14); // Phóng to bản đồ
//     } else {
//         alert('Vui lòng chờ một chút để lấy vị trí hiện tại.');
//     }
// });
//
// // Tạo phần tử cho dấu chấm xanh
// function createMarkerElement() {
//     var markerDiv = document.createElement('div');
//     markerDiv.className = 'marker';
//     return markerDiv;
// }
//
// let selectedLat, selectedLng;
// //Xử lý sự kiện click trên bản đồ
// map.on('click', function (event) {
//     var lngLat = event.lngLat;  // Lấy tọa độ khi click
//     var infoDiv = document.getElementById('info');
//
//     selectedLat = lngLat.lat;
//     selectedLng = lngLat.lng;
//
//     infoDiv.innerHTML = 'Tọa độ bạn đã nhấp: ' + '<br>' +selectedLat + '<br>' + selectedLng + '<button id="infomation_form">Add</button>';
//
//     document.getElementById('infomation_form').addEventListener('click', function() {
//         var form = document.getElementById('formmon');
//         var form1 = document.getElementById('info');
//         form.style.display = 'block';
//         form1.style.display = 'block';
// // lưu giá trị toạn độ của vị tris nhấp vào localStorage
//         // var storedLocations = JSON.parse(localStorage.getItem('locations')) || [];
//         // storedLocations.push({ lat: selectedLat, lng: selectedLng });
//         // localStorage.setItem('locations', JSON.stringify(storedLocations));
//     });
//     // Tạo một marker mới tại vị trí đã nhấp
//     var newMarker = new tt.Marker().setLngLat(lngLat).addTo(map);
//     markers.push(newMarker);
//
//     var form = document.getElementById('info');
//     var overlay = document.getElementById('overlay');
//     var popupContent = document.getElementById('popupContent');
//     form.style.display = 'block';
//     overlay.style.display = 'block';
//     popupContent.style.display = 'block';
// });
//
// const openFormBtn = document.getElementById('openFormBtn');
// const myForm = document.getElementById('info');
// const overlay = document.getElementById('overlay');
// const forminfopro = document.getElementById('formmon');
// openFormBtn.addEventListener('click', function () {
//     myForm.style.display = 'block';
//     overlay.style.display = 'block';
// });
// overlay.addEventListener('click', function () {
//
//     if (markers.length > 0) {
//         var lastMarker = markers.pop();
//         lastMarker.remove();
//     }
//     myForm.style.display = 'none';
//     overlay.style.display = 'none';
//     forminfopro.style.display = 'none';
// });
//
// //thêm địa chỉ vào map
//
// document.getElementById('formmon').addEventListener('submit', function (event) {
//     event.preventDefault();
//
//     var storeName = document.getElementById('storeName').value;
//     var storePhone = document.getElementById('storePhone').value;
//     var foodName = document.getElementById('foodName').value;
//     var quantity = document.getElementById('quantity').value;
//     var priceOption = document.getElementById('price_option').value;
//     var price = document.getElementById('price').value;
//     var imageUpload = document.getElementById('imageUpload').files[0]; // Đảm bảo đây là tệp hình ảnh
//
//     if (!imageUpload) {
//         alert("Vui lòng tải lên một hình ảnh.");
//         return;
//     }
//
//     var reader = new FileReader();
//     reader.onload = function (e) {
//         var imageUrl = e.target.result; // Lấy URL hình ảnh
//
//         // Tạo marker và popup
//         var marker = new tt.Marker().setLngLat([selectedLng, selectedLat]).addTo(map);
//
//         var popupContent = `
//             Thực phẩm: ${foodName}<br>
//             Giá: ${priceOption === 'free' ? 'Miễn phí' : '$' + price}<br>
//             <a href="index.html"><img class="popup-image" src="${imageUrl}" alt="${foodName}"></a>
//         `;
//         var popup = new tt.Popup({ offset: 35 }).setHTML(popupContent);
//         marker.setPopup(popup).togglePopup();
//
//         // Lưu thông tin vào localStorage
//         var storedLocations = JSON.parse(localStorage.getItem('locations')) || [];
//         storedLocations.push({
//             lat: selectedLat,
//             lng: selectedLng,
//             storeName: storeName,
//             storePhone: storePhone,
//             foodName: foodName,
//             quantity: quantity,
//             priceOption: priceOption,
//             price: price,
//             imageUrl: imageUrl // Lưu URL hình ảnh vào localStorage
//         });
//         localStorage.setItem('locations', JSON.stringify(storedLocations));
//
//         // Di chuyển bản đồ đến vị trí của marker
//         map.flyTo({ center: [selectedLng, selectedLat], zoom: 15 });
//         // Xóa các trường trong form
//         document.getElementById('formmon').reset();
//     };
//
//     myForm.style.display = 'none';
//     overlay.style.display = 'none';
//     forminfopro.style.display = 'none';
//
//     reader.readAsDataURL(imageUpload); // Đọc tệp hình ảnh
// });
//
// // Tải dữ liệu từ localStorage và hiển thị trên bản đồ khi trang được tải
// window.addEventListener('load', function () {
//     var storedLocations = JSON.parse(localStorage.getItem('locations')) || [];
//     storedLocations.forEach(function (location) {
//         var marker = new tt.Marker().setLngLat([location.lng, location.lat]).addTo(map);
//
//         var popupContent = `
//         Food Name: ${location.foodName}<br>
//         Price: ${location.priceOption === 'free' ? 'Miễn phí' : '$' + location.price}<br>
//         <a href="index.html"><img class="popup-image" src="${location.imageUrl}" alt="${location.foodName}"></a>
//     `;
//         var popup = new tt.Popup({ offset: 30 }).setHTML(popupContent);
//         marker.setPopup(popup).togglePopup();
//     });
// });
// // Xóa tất cả dữ liệu trong Local Storage
// //xử lý sự kiênj thêm danh sách sản phẩm vào homepage
// var priceOption = document.getElementById('price_option');
// var priceInput = document.getElementById('price');
// var form = document.getElementById('formmon');
// var imageInput = document.getElementById('imageUpload');
//
// priceOption.addEventListener('change', function() {
//     if (priceOption.value === 'free') {
//         priceInput.value = '';
//         priceInput.disabled = true;
//         priceInput.removeAttribute('required');
//     } else if (priceOption.value === 'paid') {
//         priceInput.disabled = false;
//         priceInput.setAttribute('required', 'required');
//     }
// });
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//
//     var storeName = document.getElementById('storeName').value;
//     var storePhone = document.getElementById('storePhone').value;
//     var foodName = document.getElementById('foodName').value;
//     var quantity = document.getElementById('quantity').value;
//     var priceOption = document.getElementById('price_option').value;
//     var price = document.getElementById('price').value;
//     var imageUpload = document.getElementById('imageUpload').files[0];
//
//     if (!imageUpload) {
//         alert("Vui lòng tải lên một hình ảnh.");
//         return;
//     }
//
//     var reader = new FileReader();
//     reader.onload = function (e) {
//         var imageBase64 = e.target.result;
//
//         var apiUrl = 'https://api.example.com/products';  // Thay bằng URL của API của bạn
//
//         var formData = {
//             storeName: storeName,
//             storePhone: storePhone,
//             foodName: foodName,
//             quantity: quantity,
//             price: priceOption === 'free' ? 0 : price,
//             lat: selectedLat,
//             lng: selectedLng,
//             image: imageBase64
//         };
//
//         fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 }
//                 throw new Error('Có lỗi xảy ra khi gửi dữ liệu lên server.');
//             })
//             .then(data => {
//                 console.log('send data successfully:', data);
//                 alert("Product added successfully successful!");
//                 priceInput.disabled = true; // Reset price input state
//                 priceInput.removeAttribute('required'); // Reset required attribute
//                 map.flyTo({ center: [selectedLng, selectedLat], zoom: 15 });
//                 form.reset();
//             })
//             .catch(error => {
//                 console.error('Lỗi:', error);
//                 alert('Có lỗi xảy ra khi gửi dữ liệu.');
//             });
//     };
//
//     reader.readAsDataURL(imageUpload);
// });
//
//
// // Hàm xử lý sự kiện khi bấm Submit
// document.getElementById('formmon').addEventListener('submit', function(event) {
//     event.preventDefault(); // Ngăn chặn submit form mặc định
//
//     // Lấy dữ liệu từ form
//     const storeName = document.getElementById('storeName').value;
//     const storePhone = document.getElementById('storePhone').value;
//     const foodName = document.getElementById('foodName').value;
//     const quantity = document.getElementById('quantity').value;
//     const priceOption = document.getElementById('price_option').value;
//     const price = document.getElementById('price').value || 'Free';
//     const imageFile = document.getElementById('imageUpload').files[0];
//
//     // Đọc hình ảnh
//     const reader = new FileReader();
//     reader.onload = function(e) {
//         const imageUrl = e.target.result;
//
//         // Tạo một phần tử sản phẩm mới
//         const productHTML = `
//             <div style="border: 1px solid #ccc; margin: 10px; padding: 10px;">
//                 <h3>${foodName}</h3>
//                 <p><strong>Store Name:</strong> ${storeName}</p>
//                 <p><strong>Phone:</strong> ${storePhone}</p>
//                 <p><strong>Quantity:</strong> ${quantity}</p>
//                 <p><strong>Price:</strong> ${priceOption === 'free' ? 'Free' : '$' + price}</p>
//                 <img src="${imageUrl}" alt="${foodName}" style="width: 100px; height: 100px;">
//             </div>
//         `;
//
//         // Thêm sản phẩm mới vào danh sách sản phẩm
//         document.getElementById('productList').innerHTML = productHTML;
//     };
//
//     // Kiểm tra nếu có hình ảnh được upload, sau đó đọc file
//     if (imageFile) {
//         reader.readAsDataURL(imageFile);
//     }
// });
//

// Đoạn code thiết lập bản đồ
tt.setProductInfo('FoodSharing', '1.0');
var map = tt.map({
    key: 'szTHucPplAtuPjuDVkmfgcuJqgemDk6y',  // API Key của bạn
    container: 'map',
    center: [105.8342, 21.0278],  // Tọa độ trung tâm (Hà Nội)
    zoom: 12
});

// Function tìm kiếm địa điểm
function searchLocation(query) {
    var apiKey = 'szTHucPplAtuPjuDVkmfgcuJqgemDk6y';
    var url = `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(query)}.json?key=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 1) {
                var firstResult = data.results[0];
                var location = {
                    lng: firstResult.position.lon,
                    lat: firstResult.position.lat,
                };
                map.setCenter(location);
                map.setZoom(14);
            } else {
                alert('No location found.');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

// Thêm control điều khiển bản đồ
map.addControl(new tt.NavigationControl());
var markers = [];
var currentLocation;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        currentLocation = {
            lng: position.coords.longitude,
            lat: position.coords.latitude
        };
        var currentMarker = new tt.Marker({element: createMarkerElement()})
            .setLngLat(currentLocation)
            .addTo(map);
        map.setCenter(currentLocation);
        map.setZoom(14);
        document.getElementById('info').innerHTML = 'Current location: ' + currentLocation.lat + ', ' + currentLocation.lng;
    }, function () {
        alert('Unable to get current location.');
    });
} else {
    alert('Your browser does not support Geolocation. Please open the website in another browser.');
}

// Sự kiện click để lấy vị trí hiện tại
document.getElementById('currentLocationButton').addEventListener('click', function () {
    if (currentLocation) {
        map.setCenter(currentLocation);
        map.setZoom(14);
    } else {
        alert('Please wait for current location to be retrieved.');
    }
});

// Tạo phần tử marker
function createMarkerElement() {
    var markerDiv = document.createElement('div');
    markerDiv.className = 'marker';
    return markerDiv;
}

let selectedLat, selectedLng;
//Xử lý sự kiện click trên bản đồ
map.on('click', function (event) {
    const lngLat = event.lngLat;
    selectedLat = lngLat.lat;
    selectedLng = lngLat.lng;

    document.getElementById('info').innerHTML = 'Coordinates clicked: ' + '<br>' + selectedLat + '<br>' + selectedLng + '<button id="infomation_form">Add</button>';

    document.getElementById('infomation_form').addEventListener('click', function () {
        let form = document.getElementById('formmon');
        let infoDiv = document.getElementById('info');
        form.style.display = 'block';
        infoDiv.style.display = 'block';
    });
    // Tạo một marker mới tại vị trí đã nhấp
    const newMarker = new tt.Marker().setLngLat(lngLat).addTo(map);
    markers.push(newMarker);

    let form = document.getElementById('info');
    let overlay = document.getElementById('overlay');
    // let popupContent = document.getElementById('popupContent');
    form.style.display = 'block';
    overlay.style.display = 'block';
    // popupContent.style.display = 'block';
});

// Xử lý submit form
document.getElementById('formmon').addEventListener('submit', function (event) {
    event.preventDefault();

    const storeName = document.getElementById('storeName').value;
    const storePhone = document.getElementById('storePhone').value;
    const foodName = document.getElementById('foodName').value;
    const quantity = document.getElementById('quantity').value;
    const priceOption = document.getElementById('price_option').value;
    const price = document.getElementById('price').value;
    const imageUpload = document.getElementById('imageUpload').files[0];

    if (!imageUpload) {
        alert("Please upload an image.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const imageUrl = e.target.result;

        // Gọi API POST để lưu trữ thông tin
        fetch(products, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location: selectedLng + ", " + selectedLat,
                nameStore: storeName,
                phone: storePhone,
                nameProduct: foodName,
                quantity: quantity,
                price: price,
                image: imageUrl
            })
        })
            .then(response => response.json())
            .then(data => {
                alert('Product information has been successfully saved!');
                if (data.status === 200 && data.code === '00' && data.messages === 'success') {
                    alert('Product information has been successfully saved!');
                } else {
                    alert('Failed to save product information. Error: ' + data.messages);
                }
                //     let marker = new tt.Marker().setLngLat([selectedLng, selectedLat]).addTo(map);
                //     let popupContent = `
                //     Food: ${foodName}<br>
                //     Price: ${priceOption === 'free' ? 'Free' : '$' + price}<br>
                //     <a href="index.html"><img class="popup-image" src="${imageUrl}" alt="${foodName}"></a>
                // `;
                //     let popup = new tt.Popup({ offset: 35 }).setHTML(popupContent);
                //     marker.setPopup(popup).togglePopup();

                // Tạo HTML để hiển thị sản phẩm mới
                //     const productHTML = `
                //     <div style="border: 1px solid #ccc; margin: 10px; padding: 10px;">
                //         <h3>${foodName}</h3>
                //         <p><strong>Store Name:</strong> ${storeName}</p>
                //         <p><strong>Phone:</strong> ${storePhone}</p>
                //         <p><strong>Quantity:</strong> ${quantity}</p>
                //         <p><strong>Price:</strong> ${priceOption === 'free' ? 'Free' : '$' + price}</p>
                //         <img src="${imageUrl}" alt="${foodName}" style="width: 100px; height: 100px;">
                //     </div>
                // `;
                //     document.getElementById('productList').innerHTML += productHTML;

            })
            .catch(error => {
                alert('Failed to save product information.');
                console.error('Error:', error);
            });

        map.flyTo({center: [selectedLng, selectedLat], zoom: 15});
        document.getElementById('formmon').reset();
    };

    reader.readAsDataURL(imageUpload);
});

// Gọi API GET để lấy dữ liệu và lưu vào localStorage
function fetchLocations() {
    // const savedLocations = localStorage.getItem('locations');
    //
    // // Nếu đã có dữ liệu trong localStorage thì hiển thị ra luôn
    // if (savedLocations) {
    //     const data = JSON.parse(savedLocations);
    //
    //     // Kiểm tra xem 'data' có phải là mảng không
    //     if (Array.isArray(data.content)) {
    //         displayProducts(data.content);
    //     } else {
    //         console.error('Saved locations data is not an array.');
    //     }
    //     return;
    // }

    fetch(products)
        .then(response => response.json())
        .then(data => {
            // Lấy danh sách sản phẩm từ thuộc tính 'content'
            const products = data.data.content;

            // Kiểm tra xem dữ liệu trả về từ API có phải là mảng không
            if (Array.isArray(products)) {
                // Lưu dữ liệu vào localStorage
                localStorage.setItem('locations', JSON.stringify(products));

                // Hiển thị các sản phẩm đã lưu
                displayProducts(products);
            } else {
                console.error('Fetched content is not an array.');
            }
        })
        .catch(error => {
            alert('Failed to fetch locations.');
            console.error('Error:', error);
        });
}

// Hàm hiển thị sản phẩm ra HTML
function displayProducts(data) {
    data.forEach(product => {
        // Tạo marker và popup
        const [latitude, longitude] = product.eatery.location.split(',').map(coord => coord.trim());
        const marker = new tt.Marker().setLngLat([longitude, latitude]).addTo(map);

        const popupContent = `
            Thực phẩm: ${product.nameProduct}<br>
            Giá: ${product.price}<br>
            <a href="../index.html"><img class="popup-image" src="${product.image}" alt="${product.nameProduct}"></a>
        `;
        var popup = new tt.Popup({offset: 35}).setHTML(popupContent);
        marker.setPopup(popup).togglePopup();

        // const productHTML = `
        //     <div style="border: 1px solid #ccc; margin: 10px; padding: 10px;">
        //         <h3>${product.foodName}</h3>
        //         <p><strong>Store Name:</strong> ${product.storeName}</p>
        //         <p><strong>Phone:</strong> ${product.storePhone}</p>
        //         <p><strong>Quantity:</strong> ${product.quantity}</p>
        //         <p><strong>Price:</strong> ${product.priceOption === 'free' ? 'Free' : '$' + product.price}</p>
        //         <img src="${product.imageUrl}" alt="${product.foodName}" style="width: 100px; height: 100px;">
        //     </div>
        // `;
        //
        // // Thêm sản phẩm mới vào danh sách sản phẩm
        // document.getElementById('productList').innerHTML += productHTML;
    });
}

// Gọi hàm fetchLocations khi trang được tải
fetchLocations();


