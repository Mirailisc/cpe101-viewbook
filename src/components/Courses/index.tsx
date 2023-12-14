import styles from './index.module.scss'

interface ICourse {
  name: string
  url: string
  image: string
}

const corsesList: ICourse[] = [
  {
    name: 'Artificial Intelligence',
    url: '/summary/5/',
    image: 'https://assets.weforum.org/global_future_council/image/fabPa6XL9nlperaAUe8nTN6c01xh7Bq9hq1euHO3ud4.jpg',
  },
  {
    name: 'Cyber Security',
    url: '/summary/912/',
    image: 'https://assets.everspringpartners.com/dims4/default/9657a54/2147483647/strip/true/crop/476x250+72+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2F68%2F50%2F50bc96eb4ea998f053c9a6b9e914%2Fadobestock-245636933-620x250.jpg',
  },
  {
    name: 'Arduino',
    url: '/summary/910/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Arduino-uno-perspective.jpg',
  },
  {
    name: '2D & 3D',
    url: '/summary/3/',
    image: 'https://thirdspacelearning.com/wp-content/uploads/2021/03/3d-shapes.jpg',
  },
  {
    name: 'Web Dev',
    url: '/summary/7/',
    image: 'https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Types-of-Web-Dev.jpg',
  },
  {
    name: 'Game Dev',
    url: '/summary/8/',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9RBYcmAtF8a9iHhg_Xiz_lXfZhGWbJrk1qX6aBk5ZL8Cgv7gi-3ePtUZKWeS-pl6rGM&usqp=CAU',
  },
]

const Courses: React.FC = (): JSX.Element => {
  const renderCourse = corsesList.map((course: ICourse, index: number) => {
    return (
      <a href={course.url} className={styles.card} key={index}>
        <img src={course.image} alt="image" />
        <div className={styles.text}>{course.name}</div>
      </a>
    )
  })

  return (
    <div className={styles.courses}>
      {renderCourse}
    </div>
  )
}

export default Courses
