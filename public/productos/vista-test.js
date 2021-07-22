const PRODUCTS_TEMPLATE = `
{{#each products}}
<tr> <th scope="row">{{this.id}}</th> <td>{{this.title}}</td> <td>{{this.price}}</td>
<td><img src="{{this.thumbnail}}" alt="Imagen del producto"
class="rounded-sm" style="width: 50px;" /></td> </tr>
{{/each}}`;

const MESSAGE = `{{#if message}} <div class="alert alert-warning" role="alert">
{{message}}
</div>
{{/if}}`;

document
  .getElementById("btnGenerate")
  .addEventListener("click", function (event) {
    fetch(
      "/productos/vista-test/" + document.getElementById("txtNumber").value,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((respuesta) => respuesta.json())
      .then((data) => {
        let template = Handlebars.compile(MESSAGE);
        document.getElementById("message").innerHTML = template({
          message: data.message,
        });

        template = Handlebars.compile(PRODUCTS_TEMPLATE);
        document.getElementById("productsContainer").innerHTML = template({
          products: data.products,
        });
      })
      .catch((error) => console.error(error));
  });
