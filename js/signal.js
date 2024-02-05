const renderEvent = new Event("renderEvent", {
  bubbles: true,
  cancelable: false,
});

/**
 * @param {string} name
 * @param {any} init
 */
function useSignal(name, init) {
  let _state = init;
  const state = () => _state;
  const setState = (newValue) => {
    _state = newValue;
    document.querySelectorAll(`[signal="${name}"]`).forEach((e) => (e.innerHTML = newValue));
  };
  setState(init);
  return [state, setState];
}
