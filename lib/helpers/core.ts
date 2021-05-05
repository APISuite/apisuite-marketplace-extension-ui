let values = {}

interface Core {
  (): Record<string, any>
  set: (core: Record<string, any>) => void
}

const core: Core = () => values

core.set = (core: Record<string, any>) => {
  values = {
    ...values,
    ...core,
  }
}

export default core
