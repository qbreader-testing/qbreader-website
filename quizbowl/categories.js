export const CATEGORY_TO_SUBCATEGORY = {
  Literature: ['American Literature', 'British Literature', 'Classical Literature', 'European Literature', 'World Literature', 'Other Literature'],
  History: ['American History', 'Ancient History', 'European History', 'World History', 'Other History'],
  Science: ['Biology', 'Chemistry', 'Physics', 'Other Science'],
  'Fine Arts': ['Visual Fine Arts', 'Auditory Fine Arts', 'Other Fine Arts'],
  Religion: ['Religion'],
  Mythology: ['Mythology'],
  Philosophy: ['Philosophy'],
  'Social Science': ['Social Science'],
  'Current Events': ['Current Events'],
  Geography: ['Geography'],
  'Other Academic': ['Other Academic'],
  'Pop Culture': ['Movies', 'Music', 'Sports', 'Television', 'Video Games', 'Other Pop Culture']
};
export const CATEGORIES = Object.keys(CATEGORY_TO_SUBCATEGORY);

export const CATEGORY_TO_ALTERNATE_SUBCATEGORIES = {
  Literature: ['Drama', 'Long Fiction', 'Poetry', 'Short Fiction', 'Misc Literature'],
  History: [],
  Science: ['Math', 'Astronomy', 'Computer Science', 'Earth Science', 'Engineering', 'Misc Science'],
  'Fine Arts': ['Architecture', 'Dance', 'Film', 'Jazz', 'Musicals', 'Opera', 'Photography', 'Misc Arts'],
  Religion: [],
  Mythology: [],
  Philosophy: [],
  'Social Science': ['Anthropology', 'Economics', 'Linguistics', 'Psychology', 'Sociology', 'Other Social Science'],
  'Current Events': [],
  Geography: [],
  'Other Academic': [],
  'Pop Culture': []
};

export const SUBCATEGORY_TO_CATEGORY = {
  'American Literature': 'Literature',
  'British Literature': 'Literature',
  'Classical Literature': 'Literature',
  'European Literature': 'Literature',
  'World Literature': 'Literature',
  'Other Literature': 'Literature',
  'American History': 'History',
  'Ancient History': 'History',
  'European History': 'History',
  'World History': 'History',
  'Other History': 'History',
  Biology: 'Science',
  Chemistry: 'Science',
  Physics: 'Science',
  'Other Science': 'Science',
  'Visual Fine Arts': 'Fine Arts',
  'Auditory Fine Arts': 'Fine Arts',
  'Other Fine Arts': 'Fine Arts',
  Religion: 'Religion',
  Mythology: 'Mythology',
  Philosophy: 'Philosophy',
  'Social Science': 'Social Science',
  'Current Events': 'Current Events',
  Geography: 'Geography',
  'Other Academic': 'Other Academic',
  Movies: 'Pop Culture',
  Music: 'Pop Culture',
  Sports: 'Pop Culture',
  Television: 'Pop Culture',
  'Video Games': 'Pop Culture',
  'Other Pop Culture': 'Pop Culture'
};
export const SUBCATEGORIES = Object.keys(SUBCATEGORY_TO_CATEGORY);

export const ALTERNATE_SUBCATEGORY_TO_CATEGORY = {
  Drama: 'Literature',
  'Long Fiction': 'Literature',
  Poetry: 'Literature',
  'Short Fiction': 'Literature',
  'Misc Literature': 'Literature',
  Math: 'Science',
  Astronomy: 'Science',
  'Computer Science': 'Science',
  'Earth Science': 'Science',
  Engineering: 'Science',
  'Misc Science': 'Science',
  Architecture: 'Fine Arts',
  Dance: 'Fine Arts',
  Film: 'Fine Arts',
  Jazz: 'Fine Arts',
  Musicals: 'Fine Arts',
  Opera: 'Fine Arts',
  Photography: 'Fine Arts',
  'Misc Arts': 'Fine Arts',
  Anthropology: 'Social Science',
  Economics: 'Social Science',
  Linguistics: 'Social Science',
  Psychology: 'Social Science',
  Sociology: 'Social Science',
  'Other Social Science': 'Social Science'
};
export const ALTERNATE_SUBCATEGORIES = Object.keys(ALTERNATE_SUBCATEGORY_TO_CATEGORY);
