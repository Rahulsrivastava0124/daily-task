import React from "react";

function Footer(props) {
  return (
    <div
      class={`px-4 mx-1 mt-3 rounded bg-${props.color.bg} text-${props.color.text}`}>
      <footer class="d-flex flex-wrap justify-content-between align-items-center mx-1 rounded border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-palette2"
              viewBox="0 0 16 16">
              <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495V.5z" />
              <path d="M0 12.995V13a3.07 3.07 0 0 0 0-.005z" />
            </svg>
          </a>
          <span class="text-muted">© 2021 Company, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <i class="bi bi-twitter m-2"></i>
          <i class="bi bi-instagram m-2"></i>
          <i class="bi bi-facebook m-2"></i>
          <i class="bi bi-github m-2"></i>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
