let app = new function () {
    this.el = document.getElementById('countries');

    this.countries = [];

    this.Count = function (data) {
        var el = document.getElementById('counter');

        var name = 'country';

        if (data) {
            if (data > 1) {
                name = 'countries';
            }
            el.innerHTML = data + ' ' + name;
        }
        else {
            el.innerHTML = 'No ' + name;
        }
    };

    // READ THE DATA
    this.FetchAll = function () {
        var data = '';

        if (this.countries.length > 0) {
            for (i = 0; i < this.countries.length; i++) {
                data += '<tr>';
                data += '<td>' + this.countries[i] + '</td>';
                data += '</tr>';
                data += '<td><button onclick="app.Update(' + i + ')">Update</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
            }
        }
        this.Count(this.countries.length);
        return this.el.innerHTML = data;
    };

    //  ADD NEW COUNTRY
    this.Add = function () {
        el = document.getElementById('add-name');
        var country = el.value;

        if (country) {
            this.countries.push(country.trim());

            this.el.value = ' ';

            this.FetchAll();
        }

    };

    // UPDATE A ROW
    this.Update = function (item) {

        document.getElementById('btn').innerText = 'Update';

        var el = document.getElementById('add-name');

        el.value = this.countries[item];

        self = this;

        document.getElementById('btn').addEventListener('click', function () {
            var country = el.value;

            if (country) {
                self.countries.splice(item, 1, country.trim());

                self.FetchAll();

            }
            document.getElementById('add-name').value = '';
            document.getElementById('btn').innerText = "ADD";
        }, { once: true });

    };

    // DELETE A ROW
    this.Delete = function (item) {
        this.countries.splice(item, 1);
        this.FetchAll();
    };
}
app.FetchAll();

// Changing ADD OR UPDATE
function addorupdate() {
    if (document.getElementById('btn').innerText == "ADD") {
        app.Add();
    }
}