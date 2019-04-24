

export default {

  // Extracts all props from payload, adds them to props JSON if they are in expectedProps list
  addProps(payload, expectedProps) {
    let props = {};
    expectedProps.forEach((o) => {
      if (payload[o]) {
        props[o] = payload[o];
      }
    });
    return props;
  }

}
