import R from 'ramda'

const omitFields = ['__v', '_id', 'createdAt', 'updatedAt']

const mappedTypes = {
  String: 'String',
  Number: 'Int',
  ObjectID: 'ID',
}

const parseFieldType => data => 
const fieldInfoToTypeArr(obj) => `\n  ${info.type}: ${getGQLType(p)}$`



const setFieldInfo = (name, p) => {
    // console.log(p.instance)
  switch(p.instance) {
    case 'Array':
      return {name, type: p.caster.instance, array: true, required: p.isRequired }
    default:
      return { name, type: p.instance, array: true, required: p.isRequired }
  }
}

const pathToField = p => 

export const buildInput = (name, paths) => {
    const fields = R.pipe(
        R.omit(omitFields), // maybe add other operations to this pipeline
    )(paths)
    return `extend input ${name}Input {${Object.values(fields).map(pathToField).join('')}
}
`
}

export const wrapAsQuery = i => {
    const arr = Array.isArray(i) ? i : [i]
    return `extend type Query {${arr.map(v => `\n    ${v}`).join('')} }
`
} 

export const wrapAsMutation = i => {
    const arr = Array.isArray(i) ? i : [i]
    return `extend type Mutation {${arr.map(v => `\n    ${v}`).join('')} }
`
} 


export const buildMethod = (name, args, returnType) => {
    return `${name} (${args.map(el => `\n        ${el[0]}: ${el[1]}` ).join('')}
    ) : ${returnType}
`
}