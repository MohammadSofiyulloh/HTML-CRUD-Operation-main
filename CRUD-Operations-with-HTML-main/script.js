var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData['namaLengkap'] = document.getElementById('namaLengkap').value;
  formData['fakultas'] = document.getElementById('fakultas').value;
  formData['programStudi'] = document.getElementById('programStudi').value;
  formData['nim'] = document.getElementById('nim').value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById('daftarMahasiswa').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.namaLengkap;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.fakultas;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.programStudi;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.nim;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById('namaLengkap').value = '';
  document.getElementById('fakultas').value = '';
  document.getElementById('programStudi').value = '';
  document.getElementById('nim').value = '';
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById('namaLengkap').value = selectedRow.cells[0].innerHTML;
  document.getElementById('fakultas').value = selectedRow.cells[1].innerHTML;
  document.getElementById('programStudi').value = selectedRow.cells[2].innerHTML;
  document.getElementById('nim').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.empCode;
  selectedRow.cells[2].innerHTML = formData.salary;
  selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
    row = td.parentElement.parentElement;
    document.getElementById('daftarMahasiswa').deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById('namaLengkap').value == '') {
    isValid = false;
    document.getElementById('namaLengkapValidationError').classList.remove('hide');
  } else {
    isValid = true;
    if (!document.getElementById('namaLengkapValidationError').classList.contains('hide')) document.getElementById('namaLengkapValidationError').classList.add('hide');
  }
  return isValid;
}
