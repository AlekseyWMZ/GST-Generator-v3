import {faker} from '@faker-js/faker'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function getRandomPan() {
  return faker.random.alpha({count: 5, casing: 'upper'}) + faker.random.numeric(4) + faker.random.alpha({
    count: 1, casing: 'upper'
  })
}

function generatePAN(customPAN) {
  if (customPAN === '' || customPAN === undefined) {
    return getRandomPan()
  }
  return customPAN || getRandomPan()
}


export const codingSeries = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const stateNumbers = {
  '37': 'Andhra Pradesh',
  '12': 'Arunachal Pradesh',
  '18': 'Assam',
  '10': 'Bihar',
  '22': 'Chhattisgarh',
  '30': 'Goa',
  '24': 'Gujarat',
  '06': 'Haryana',
  '02': 'Himachal Pradesh',
  '01': 'Jammu and Kashmir',
  '20': 'Jharkhand',
  '29': 'Karnataka',
  '32': 'Kerala',
  '23': 'Madhya Pradesh',
  '27': 'Maharashtra',
  '14': 'Manipur',
  '17': 'Meghalaya',
  '15': 'Mizoram',
  '13': 'Nagaland',
  '21': 'Odisha',
  '34': 'Punjab',
  '03': 'Rajasthan',
  '11': 'Sikkim',
  '33': 'Tamil Nadu',
  '36': 'Telangana',
  '16': 'Tripura',
  '09': 'Uttar Pradesh',
  '05': 'Uttarakhand',
  '19': 'West Bengal',
  '35': 'Andaman and Nicobar Islands',
  '31': 'Chandigarh',
  '04': 'Dadra and Nagar Haveli',
  '07': 'Delhi'

}
export const pinList = {
  'Andhra Pradesh': ['515001', '515621', '515124'],
  'Arunachal Pradesh': ['791111'],
  'Assam': ['781001'],
  'Bihar': ['800001'],
  'Chhattisgarh': ['493661'],
  'Goa': ['403001'],
  'Gujarat': ['380001'],
  'Haryana': ['122001'],
  'Himachal Pradesh': ['171001'],
  'Jammu and Kashmir': ['190001'],
  'Jharkhand': ['834001'],
  'Karnataka': ['560001'],
  'Kerala': ['695001'],
  'Madhya Pradesh': ['462001'],
  'Maharashtra': ['400001'],
  'Manipur': ['795001'],
  'Meghalaya': ['793101'],
  'Mizoram': ['796001'],
  'Nagaland': ['797001'],
  'Odisha': ['751001'],
  'Punjab': ['160001'],
  'Rajasthan': ['302001'],
  'Sikkim': ['737101'],
  'Tamil Nadu': ['600001'],
  'Telangana': ['500001'],
  'Tripura': ['799001'],
  'Uttar Pradesh': ['226001'],
  'Uttarakhand': ['249193'],
  'West Bengal': ['700001']
}


export {getRandomInt, generatePAN}
