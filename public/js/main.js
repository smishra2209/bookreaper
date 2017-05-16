/**
 * Created by Suraj on 5/7/2017.
 */
function submitFilter(filter) {
    var fil = document.getElementById("filter");
    var criteria = document.getElementById("criteria");
    var filform = document.getElementById("filterForm");
    fil.value = filter;
    criteria.value = "genre";
    filform.submit();
}

function submitRatingFilter(filter) {
    var fil = document.getElementById("filter");
    var criteria = document.getElementById("criteria");
    var filform = document.getElementById("filterForm");
    fil.value = filter;
    criteria.value = "rating";
    filform.submit();
}

function changeCategory(category) {
    var Category = document.getElementById("category");
    Category.innerHTML = category+" <span class='caret'></span>";
    document.getElementById("criteria").value= category.split(" ")[1].toLowerCase();
    //alert(document.getElementById("criteria").value);
}

function callSearch() {
    var keyword = document.getElementById("searchKeyword").value;
    var fil = document.getElementById("filter");
    var filform = document.getElementById("filterForm");
    fil.value = keyword;
    //alert(keyword);
    filform.submit();
}

function addToCart(id) {
    var addtocartForm = document.getElementById("addtocartForm");
    var bookId = document.getElementById("bookId");
    var message = document.getElementById("alertMessage");
    message.style.display = "block";
    bookId.value = id;
    addtocartForm.submit();
}

function cancelProfileChnages() {
    var answer = confirm("Changes will be lost. Do you want to continue?");
    if(answer) {
        var form = document.getElementById('refreshForm');
        form.submit();
    }

}

function saveProfileChanges() {
    var msg = document.getElementById('alertMessage');
    var name = document.getElementById('profileName');
    var username = document.getElementById('profileUsername');
    var email = document.getElementById('profileEmail');
    if(name.value!=="" && username.value!=="" && email.value!==""){
        msg.style.display = "block";
    }

    var form = document.getElementById('profileChangesForm');
    form.submit();
}

function readOnline() {
    var readOnlineForm = document.getElementById('readOnlineForm');
    readOnlineForm.submit();
}

function changePassword() {
    var form = document.getElementById('changePasswordForm');
    var msg = document.getElementById('alertPasswordMessage');
    var newpass = document.getElementById('newpass');
    var connewpass = document.getElementById('connewpass');
    if(newpass.value === ""){
        alert('Please enter a valid new password!');
    }else{
        if(newpass.value === connewpass.value){
            msg.style.display = "block";
        }
        form.submit();
    }

}

function performLogin() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var form = document.getElementById('loginForm');
    if(username.value === ""){
        alert('Enter Valid Username');
    }else{

        form.submit();
    }

}