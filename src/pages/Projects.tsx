// src/pages/Projects.tsx

import React from 'react';
import { Link } from 'react-router-dom';

import projectOneImage from '../assets/Ecommerce.jpg';
import projectTwoImage from '../assets/nlp_chatbot.png';
import projectThreeImage from '../assets/computer_vision.jpeg';
import projectFourImage from '../assets/stock_price.jpeg';
import projectFiveImage from '../assets/genai.jpeg';
import projectSixImage from '../assets/customer_analysis.jpeg';
import projectSevenImage from '../assets/dbms.jpg';
import projectEightImage from '../assets/real-time-recommedation.webp';
import projectNineImage from '../assets/social_media_micro-services.jpeg';
import projectTenImage from '../assets/trading_bot.jpeg';
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  techStack,
  link,
}) => {
  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden h-96 w-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-neutral-700 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-neutral-600 cursor-pointer">
      <div className="flex h-full">
        {/* Left Side - Content */}
        <div className="w-1/2 p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{title}</h3>
          
          {/* Scrollable Description */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-neutral-700 scrollbar-thumb-neutral-500">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
          </div>
          
          {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="text-xs font-medium text-gray-400 mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-1">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-neutral-700 text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Button */}
          <Link
            to={link}
            className="bg-white text-black font-medium px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors text-center"
          >
            View Project
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      image: projectOneImage,
      title: 'E-Commerce Platform with AI Recommendations',
      description: 'A full-stack e-commerce platform built with Django and React, featuring AI-powered product recommendations using collaborative filtering and content-based algorithms. Implemented secure payment integration with Stripe, real-time inventory management, and advanced search functionality with Elasticsearch. The platform includes admin dashboard, user authentication, order tracking, and automated email notifications.',
      techStack: ['Python', 'Django', 'React', 'PostgreSQL', 'Redis', 'Scikit-learn', 'Stripe API'],
      link: '/projects/ecommerce-ai',
    },
    {
      image: projectTwoImage,
      title: 'Natural Language Processing Chatbot',
      description: 'An intelligent chatbot system using advanced NLP techniques including BERT transformers and custom intent classification. Built with Django REST framework backend and React frontend, featuring real-time chat interface, conversation history, and multi-language support.',
      techStack: ['Python', 'BERT', 'Transformers', 'Django', 'React', 'MongoDB', 'WebSocket'],
      link: '/projects/nlp-chatbot',
    },
    {
      image: projectThreeImage,
      title: 'Computer Vision Object Detection System',
      description: 'Real-time object detection and tracking system using YOLO v8 and OpenCV. Deployed as a web application with Flask backend for video processing and React frontend for live streaming. Includes custom dataset training and model optimization for edge deployment.',
      techStack: ['Python', 'YOLO', 'OpenCV', 'PyTorch', 'Flask', 'React', 'Docker'],
      link: '/projects/cv-detection',
    },
    {
      image: projectFourImage,
      title: 'Stock Price Prediction with LSTM',
      description: 'Deep learning model for stock price prediction using LSTM neural networks. Features data preprocessing from Yahoo Finance API, technical indicators calculation, and interactive visualization dashboard. Includes backtesting framework and risk analysis metrics.',
      techStack: ['Python', 'TensorFlow', 'LSTM', 'Pandas', 'Plotly', 'Yahoo Finance API'],
      link: '/projects/stock-prediction',
    },
    {
      image: projectFiveImage,
      title: 'Generative AI Content Creator',
      description: 'AI-powered content generation platform using GPT and DALL-E APIs. Built with Django backend and React frontend, featuring text generation, image creation, content optimization, and user management system with subscription tiers.',
      techStack: ['Python', 'OpenAI API', 'Django', 'React', 'PostgreSQL', 'Celery', 'AWS S3'],
      link: '/projects/gen-ai-creator',
    },
    {
      image: projectSixImage,
      title: 'Customer Analytics Dashboard',
      description: 'Comprehensive data analytics platform for customer behavior analysis. Features ETL pipelines, interactive dashboards with Plotly/Dash, predictive analytics for customer churn, and automated reporting system.',
      techStack: ['Python', 'Pandas', 'Plotly', 'Dash', 'SQLAlchemy', 'Apache Airflow'],
      link: '/projects/analytics-dashboard',
    },
    {
      image: projectSevenImage,
      title: 'Distributed Database Management System',
      description: 'Custom distributed database system with ACID compliance, query optimization, and replication. Includes SQL parser, transaction manager, and web-based admin interface for database monitoring and management.',
      techStack: ['Python', 'PostgreSQL', 'Redis', 'Docker', 'FastAPI', 'React'],
      link: '/projects/distributed-db',
    },
    {
      image: projectEightImage,
      title: 'Real-time Recommendation Engine',
      description: 'Scalable recommendation system using collaborative filtering and matrix factorization. Built with Apache Kafka for real-time data streaming, Redis for caching, and MLflow for model versioning and deployment.',
      techStack: ['Python', 'Apache Kafka', 'Redis', 'MLflow', 'Scikit-learn', 'Docker'],
      link: '/projects/recommendation-engine',
    },
    {
      image: projectNineImage,
      title: 'Microservices Social Media Platform',
      description: 'Full-stack social media application built with microservices architecture. Features user authentication, post creation, real-time messaging, image processing, and content moderation using AI.',
      techStack: ['Python', 'FastAPI', 'React', 'MongoDB', 'RabbitMQ', 'Docker', 'Kubernetes'],
      link: '/projects/social-platform',
    },
    {
      image: projectTenImage,
      title: 'Automated Trading Bot with ML',
      description: 'Algorithmic trading system using machine learning for market prediction and automated execution. Features risk management, backtesting framework, and real-time portfolio monitoring dashboard.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'Alpaca API', 'Django', 'Celery'],
      link: '/projects/trading-bot',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">My Projects</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Showcasing my expertise in Python Full Stack Development, AI/ML, Deep Learning, 
            Generative AI, Data Analytics, and Database Systems through impactful projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;