// Metod to show Toastr notifications
window.showToast = function (type, msg)
{
    const config = {timeOut: 5000, closeButton: true};

    if (type === "success")
        toastr.success(msg, "Success", config);
    
    if (type === "error")
        toastr.error(msg, "Error", config);

}


// Metod to show SweetAlerts
window.showAlert = function(icon, title)
{
    Swal.fire({
        icon: icon,
        title: title
        // text: 'Something went wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
    })
}

// Method to ask SweetAlerts - Confirmation
window.askConfirmation = async function(icon, title, confirmButtonText, denyButtonText)
{
    const isConfirmed = 
    await Swal.fire({
        title: title,
        icon: icon,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: confirmButtonText,
        denyButtonText: denyButtonText,
      }).then((result) => {
        if (result.isConfirmed) {
          return true;
        } else { // isDenied, isDismissed
          return false;
        }
      })

    return isConfirmed;
}