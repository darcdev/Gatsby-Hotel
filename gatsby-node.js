const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const resultado = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `)

  //   console.log(resultado.data.allDatoCmsHabitacion.nodes)
  if (resultado.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // si hay paginas , crear archivos

  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes

  habitaciones.forEach(habitacion => {
    createPage({
      path: habitacion.slug,
      component: path.resolve(`./src/templates/Habitaciones.js`),
      context: {
        slug: habitacion.slug,
      },
    })
  })
}
