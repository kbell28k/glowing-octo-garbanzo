$(document).ready(function () {

    // Uploading photo

    var imageUrl = "";

    var myWidget = cloudinary.createUploadWidget({
      cloudName: 'dhitmyxio', 
      uploadPreset: 'sdnfqzof'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info);
           imageUrl = result.info.url;
           $("input#image").val(imageUrl)
           console.log(imageUrl);
        }
      }
    );
    
    document.getElementById("upload_widget").addEventListener("click", function(e){
          e.preventDefault();
        myWidget.open();
        console.log('Done! image upload');
      }, false);


    // Getting references to our form and input
    var postItemForm = $("form.item-post");
    var nameInput = $("input#name");
    var priceInput = $("input#price");
    var tradeInput = $("input#trade");
    var descriptionInput = $("input#item-description");
    var imageInput = $("input#image");
    // When the signup button is clicked, we validate the email and password are not blank
    postItemForm.on("submit", function (event) {
      event.preventDefault();
      console.log('submit! stared');
      var itemData = {
        name: nameInput.val().trim(),
        price: priceInput.val().trim(),
        trade: tradeInput.val().trim(),
        description: descriptionInput.val().trim(),
        image: imageInput.val().trim()
      };
      itemData.trade = itemData.trade === 'Yes' ? true: false;
      if (!itemData.name || !itemData.price || !itemData.trade || !itemData.description) {
        return;
      }
      console.log({itemData })
      // If we have an email and password, run the signUpUser function
      createNewPost(itemData.name, itemData.price, itemData.trade, itemData.description, itemData.image );
      nameInput.val("");
      priceInput.val("");
      descriptionInput.val("");
      tradeInput.val("");
      imageInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function createNewPost(name, price, trade, description,image) {
      console.log({image })
      $.post("/api/post-item", {
        name, 
        price, 
        trade, 
        description,
        image
      })
        .then(function (data) {
          window.location.replace("/allitems");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }



  });
  
  
