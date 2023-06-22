// Get the textarea and button elements
const noteInput   = document.getElementById('note');
const saveButton  = document.getElementById('save');

// Load the saved notes when the popup is opened
chrome.storage.sync.get('notes', function (data) {
    if (data.notes) {
        noteInput.value = data.notes
    }
    saveButton.style.visibility = 'hidden';
});

/* noteInput.addEventListener('keypress', function () {
    saveButton.style.visibility = 'visible';
}); */

noteInput.addEventListener('cut', function () {
    saveButton.style.visibility = 'visible';
});

noteInput.addEventListener('keydown', function () {
    saveButton.style.visibility = 'visible';
});

noteInput.addEventListener('paste', function () {
    saveButton.style.visibility = 'visible';
});

// Save a note when the save button is clicked
saveButton.addEventListener('click', function () {
    const note = noteInput.value;

    if (note.length > 0) {
        chrome.storage.sync.set({ notes: note });
    } else {
        chrome.storage.sync.remove('notes');
    }
    saveButton.style.visibility = 'hidden';
});


