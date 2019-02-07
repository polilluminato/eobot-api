const requiredProps = (object:any, props:string[]) => {
  const unefinedProps = props.filter((prop) => {
    return typeof object[prop] === 'undefined';
  });

  if (unefinedProps.length) {
    const message = `
This method requires "${props.join(', ')}"
but "${unefinedProps.join(', ')}" are undefined.

Set with "eobotInstance.setAccount({ prop: value });".
`;

    console.error(message);
    if (process) {
      process.exit();
    }
  }
};

export = requiredProps;
