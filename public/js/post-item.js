$(document).ready(function () {

    // Uploading photo

    var imageUrl = "";

    var myWidget = cloudinary.createUploadWidget({
      cloudName: 'dhitmyxio', 
      uploadPreset: 'sdnfqzof'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info);
           imageUrl = result.info.url;
           console.log(imageUrl);
        }
      }
    );
    
    document.getElementById("upload_widget").addEventListener("click", function(){
        myWidget.open();
      }, false);


    // Getting references to our form and input
    var postItemForm = $("form.item-post");
    var nameInput = $("input#name");
    var priceInput = $("input#price");
    var tradeInput = $("input#trade");
    var descriptionInput = $("input#item-description");
    // When the signup button is clicked, we validate the email and password are not blank
    postItemForm.on("submit", function (event) {
      event.preventDefault();
      var itemData = {
        name: nameInput.val().trim(),
        price: priceInput.val().trim(),
        trade: tradeInput.val().trim(),
        description: descriptionInput.val().trim()
      };
      itemData.trade = itemData.trade === 'Yes' ? true: false;
      if (!itemData.name || !itemData.price || !itemData.trade || !itemData.description) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      createNewPost(itemData.name, itemData.price, itemData.trade, itemData.description);
      nameInput.val("");
      priceInput.val("");
      descriptionInput.val("");
      tradeInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function createNewPost(name, price, trade, description) {
      $.post("/api/post-item", {
        name, 
        price, 
        trade, 
        description
      })
        .then(function (data) {
          window.location.replace("/members");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }



  });
  
  
