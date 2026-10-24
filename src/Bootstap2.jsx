function Bootstrap2() {
    return(
  <>
  
<button type="button" classname="btn btn-primary position-relative">
  Mails <span classname="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
</button>

<div classname="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
  Marker <svg width="1em" height="1em" viewBox="0 0 16 16" classname="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--bs-secondary)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</div>

<button type="button" classname="btn btn-primary position-relative">
  Alerts <span classname="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
</button>
</>
    )
}
export default Bootstrap2;