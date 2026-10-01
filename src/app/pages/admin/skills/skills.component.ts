import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  stats = [

    {
      title: 'Total Skills',
      value: '212',
      change: '12',
      icon: '⚙',
      color: 'purple'
    },

    {
      title: 'Skill Categories',
      value: '18',
      change: '2',
      icon: '▰',
      color: 'green'
    },

    {
      title: 'Mapped Courses',
      value: '42',
      change: '6',
      icon: '👥',
      color: 'orange'
    },

    {
      title: 'Students with Skills',
      value: '1,248',
      change: '15%',
      icon: '▥',
      color: 'blue'
    }

  ];


  categories = [

    {
      name: 'Programming',
      value: 68,
      percent: 32,
      color: 'programming'
    },

    {
      name: 'Data Analysis',
      value: 42,
      percent: 20,
      color: 'data'
    },

    {
      name: 'Web Development',
      value: 36,
      percent: 17,
      color: 'web'
    },

    {
      name: 'Soft Skills',
      value: 28,
      percent: 13,
      color: 'soft'
    },

    {
      name: 'Cloud & DevOps',
      value: 22,
      percent: 10,
      color: 'cloud'
    },

    {
      name: 'Design & Tools',
      value: 16,
      percent: 8,
      color: 'design'
    }

  ];


  demandSkills = [

    {
      name: 'Python',
      value: 180,
      percent: 88
    },

    {
      name: 'JavaScript',
      value: 150,
      percent: 76
    },

    {
      name: 'SQL',
      value: 140,
      percent: 70
    },

    {
      name: 'Communication',
      value: 120,
      percent: 61
    },

    {
      name: 'Problem Solving',
      value: 110,
      percent: 55
    },

    {
      name: 'Cloud Computing',
      value: 95,
      percent: 48
    }

  ];


  skills = [

    {
      id: 1,
      name: 'Python',
      icon: '〈/〉',
      iconColor: 'purple-icon',
      category: 'Programming',
      categoryColor: 'programming-badge',
      description: 'Programming language for data science, ML, web development',
      courses: 8
    },

    {
      id: 2,
      name: 'JavaScript',
      icon: 'JS',
      iconColor: 'yellow-icon',
      category: 'Programming',
      categoryColor: 'programming-badge',
      description: 'Front-end and back-end web development',
      courses: 7
    },

    {
      id: 3,
      name: 'SQL',
      icon: '▤',
      iconColor: 'blue-icon',
      category: 'Data Analysis',
      categoryColor: 'data-badge',
      description: 'Database querying and management',
      courses: 6
    },

    {
      id: 4,
      name: 'Data Analysis',
      icon: '▥',
      iconColor: 'purple-icon',
      category: 'Data Analysis',
      categoryColor: 'data-badge',
      description: 'Analyze and visualize data',
      courses: 5
    },

    {
      id: 5,
      name: 'Web Development',
      icon: '◉',
      iconColor: 'purple-icon',
      category: 'Web Development',
      categoryColor: 'web-badge',
      description: 'Build and maintain websites and web applications',
      courses: 7
    },

    {
      id: 6,
      name: 'Cloud Computing',
      icon: '☁',
      iconColor: 'blue-icon',
      category: 'Cloud & DevOps',
      categoryColor: 'cloud-badge',
      description: 'Cloud platforms and services (AWS, Azure, GCP)',
      courses: 4
    },

    {
      id: 7,
      name: 'Communication',
      icon: '♟',
      iconColor: 'blue-icon',
      category: 'Soft Skills',
      categoryColor: 'soft-badge',
      description: 'Effective verbal and written communication',
      courses: 10
    },

    {
      id: 8,
      name: 'Problem Solving',
      icon: '💡',
      iconColor: 'orange-icon',
      category: 'Soft Skills',
      categoryColor: 'soft-badge',
      description: 'Analyze problems and find solutions',
      courses: 9
    },

    {
      id: 9,
      name: 'UI/UX Design',
      icon: '♙',
      iconColor: 'pink-icon',
      category: 'Design & Tools',
      categoryColor: 'design-badge',
      description: 'Design user-centered interfaces',
      courses: 4
    },

    {
      id: 10,
      name: 'Git & GitHub',
      icon: '◆',
      iconColor: 'red-icon',
      category: 'Cloud & DevOps',
      categoryColor: 'cloud-badge',
      description: 'Version control and collaboration',
      courses: 5
    }

  ];

}