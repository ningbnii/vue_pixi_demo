const requireComponent = require.context('.',true,/.vue$/)
const pages = []

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = componentConfig.default.name
    pages[componentName] = componentConfig.default
})

export default pages
