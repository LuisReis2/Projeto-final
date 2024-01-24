export default function clickOutSide(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';
  function closeDropdown(event) {
    element.removeAttribute(outside);
    if (!element.contains(event.target)) {
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, closeDropdown);
      });
      callback(element);
    }
  }
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, closeDropdown);
      });
    });
    element.setAttribute(outside, '');
  }
}
