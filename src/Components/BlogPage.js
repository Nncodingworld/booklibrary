import React from 'react';
import { blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8 } from '../assets';
import { NavLink } from 'react-router-dom';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Footer from './Footer';

const blogData = [
  {
    id: 1,
    title: "Why Reading Books Matters",
    date: "July 10, 2025",
    description: "Explore how reading can enhance your creativity, vocabulary, and emotional intelligence.",
   image: blog1
  },
  {
    id: 2,
    title: "Top 10 Fiction Novels",
    date: "July 9, 2025",
    description: "Dive into the best fictional stories that captivated readers across generations.",
    image: blog2
  },
  {
    id: 3,
    title: "How to Build a Reading Habit",
    date: "July 8, 2025",
    description: "Struggling to make time to read? These tips will help you become a consistent reader.",
    image: blog3
  },
  {
    id: 4,
    title: "Best Books for Entrepreneurs",
    date: "July 7, 2025",
    description: "Must-read books that can inspire and guide your entrepreneurial journey.",
    image: blog4
  },
  {
    id: 5,
    title: "Reading vs. Audiobooks",
    date: "July 6, 2025",
    description: "Are audiobooks just as effective as traditional reading? Let’s explore the pros and cons.",
    image: blog5
  },
  {
    id: 6,
    title: "The Power of Non-Fiction",
    date: "July 5, 2025",
    description: "Non-fiction books that teach real-life lessons and expand your understanding of the world.",
    image: blog6
  },
  {
    id: 7,
    title: "Classic Literature Everyone Should Read",
    date: "July 4, 2025",
    description: "A list of timeless classics that shaped the literary world.Everyone shoud Read.",
    image: blog7
  },
  {
    id: 8,
    title: "Books That Changed the World",
    date: "July 3, 2025",
    description: "Explore impactful books that influenced history and societies.",
    image: blog8
  }
];

const BlogPage = () => {
  return (
   <>
    <Container className=" blog-page py-5">
      <h2 className="text-center mb-4">Latest Blog Posts</h2>
      <p className=" blogpara text-center mb-4">Reading blogs open the door to countless new books and ideas waiting to be discovered. They connect you with passionate readers, honest reviews, and curated recommendations. Whether you're seeking motivation, knowledge, or pure escape, a good blog can lead you to your next favorite read.</p>
      <Row className="g-4">
        {blogData.map((blog) => (
          <Col key={blog.id} xs={12} sm={6} lg={3}>
            <Card className="h-100 blog-card">
              <Card.Img variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title className='blog-title'>{blog.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {blog.date}
                </Card.Subtitle>
                <Card.Text>{blog.description}</Card.Text>
                <NavLink to="/" className="view">
      View
    </NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
   </>
  );
};

export default BlogPage;
