export function Log(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const componentName = target.constructor.name;
    const input = JSON.stringify(args);
    const result = originalMethod.apply(this, args);
    const output = JSON.stringify(result);

    console.log(
      `[${componentName}] ${propertyName}() called with input: ${input}, output: ${output}`
    );

    return result;
  };

  return descriptor;
}
