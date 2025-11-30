"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiMapPin, FiCalendar } from "react-icons/fi";
import { GiCricketBat, GiBowlingStrike } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { HiUsers, HiHeart } from "react-icons/hi";
import { FiMic, FiAward } from "react-icons/fi";
import Navigation from "@/components/Navigation";

export interface HobbyPhoto {
  id: string;
  url: string;
  alt: string;
  caption: string;
  date?: string;
  location?: string;
  event?: string;
}

// Books Data
const booksData = {
  introduction: "Reading is a cornerstone of my personal growth journey. I believe in the power of books to transform mindsets, build better habits, and provide frameworks for navigating life's challenges.",
  books: [
    {
      id: "1",
      title: "Atomic Habits",
      author: "James Clear",
      imageUrl: "/Volunteering/Books/Atomic-Habits.jpeg",
      category: "Self-Improvement",
      keyTakeaway: "Small habits compound into remarkable results. Focus on systems, not goals.",
    },
    {
      id: "2",
      title: "Stop Overthinking",
      author: "Nick Trenton",
      imageUrl: "/Volunteering/Books/Stop-Overthinking.jpeg",
      category: "Mental Health",
      keyTakeaway: "Techniques to break free from analysis paralysis and reduce anxiety.",
    },
  ],
};

const cricketData = {
  introduction: "Cricket has been a passion of mine for over a decade. From playing in local tournaments to weekend matches with friends, the sport has taught me teamwork, strategy, and perseverance. Whether batting, bowling, or fielding, every moment on the pitch is an opportunity to learn and grow.",
  profileUrl: "https://play.cricket.com.au/player/0a50d9d8-785e-46b7-be3d-05b804a61d49/manish-mitra?tab=career",
  position: "All-rounder",
  batting: {
    innings: 129,
    runs: 2845,
    average: 25.63,
    highScore: 100,
    hundreds: 1,
    fifties: 16,
    notOuts: 18,
  },
  bowling: {
    overs: 242,
    wickets: 61,
    average: 20.69,
    bestBowling: "4/21",
    economy: 5.21,
  },
  fielding: {
    catches: 39,
    runOuts: 5,
  },
  stats: {
    matchesPlayed: 138,
    runsScored: 2845,
    wicketsTaken: 61,
    highestScore: 100,
    bestBowling: "4/21",
  },
  photos: [
    {
      id: "1",
      url: "/Volunteering/Cricket/Cricket.jpeg",
      alt: "Cricket match action",
      caption: "On the pitch - playing the game I love",
      location: "Melbourne",
      event: "Club Cricket",
    },
    {
      id: "2",
      url: "/Volunteering/Cricket/Award1.jpeg",
      alt: "Cricket award ceremony",
      caption: "Season award recognition",
      location: "Melbourne",
      event: "Season Awards",
    },
    {
      id: "3",
      url: "/Volunteering/Cricket/Award2.jpeg",
      alt: "Cricket achievement award",
      caption: "Celebrating cricket achievements",
      location: "Melbourne",
      event: "Awards Night",
    },
  ],
};

// Community Events Data
const communityEventsData = {
  introduction: "I'm passionate about giving back to the community through knowledge sharing and charitable initiatives. From speaking at tech events to participating in charity walks, these experiences have been incredibly rewarding.",
  events: [
    {
      id: "1",
      title: "Event Driven Architecture Talk",
      type: "speaking",
      description: "Presented on Event Driven Architectures at Dius panel discussion, sharing insights on building scalable, decoupled systems.",
      imageUrl: "/Volunteering/Community-Events/Event Driven Architectures.jpeg",
      venue: "Tech Meetup",
      icon: FiMic,
    },
    {
      id: "2",
      title: "Dius Panel Discussion",
      type: "speaking",
      description: "Participated in panel discussion on modern software architecture patterns and best practices.",
      imageUrl: "/Volunteering/Community-Events/Dius Panel on Event Driven Arc.jpeg",
      venue: "Dius Melbourne",
      icon: HiUsers,
    },
    {
      id: "3",
      title: "Can for Cancer Walk",
      type: "charity",
      description: "Participated in the Can for Cancer charity walk, raising awareness and funds for cancer research.",
      imageUrl: "/Volunteering/Community-Events/Can-for-Cancer-Walk.jpeg",
      venue: "Melbourne",
      icon: HiHeart,
    },
    {
      id: "4",
      title: "BSM Melbourne Website",
      type: "award",
      description: "Built and launched the BSM Melbourne community website, recognized with an award for contribution to the community.",
      imageUrl: "/Volunteering/Community-Events/BSM.jpeg",
      venue: "BSM Melbourne",
      icon: FiAward,
    },
  ],
};

export default function HobbiesPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<HobbyPhoto | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo: HobbyPhoto, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % cricketData.photos.length
        : (currentIndex - 1 + cricketData.photos.length) % cricketData.photos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(cricketData.photos[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigatePhoto("prev");
    if (e.key === "ArrowRight") navigatePhoto("next");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hobbies & <span className="text-primary-400">Interests</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Beyond code - exploring passions that shape who I am
            </p>
            <div className="w-24 h-1 bg-primary-400 mx-auto mt-8" />
          </motion.div>

          {/* Cricket Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <GiCricketBat className="text-primary-400" />
              Cricket
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              My passion for cricket and life on the pitch
            </p>
          </motion.div>

          {/* Career Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">{cricketData.stats.matchesPlayed} Matches</h3>
                <p className="text-gray-400 text-sm">Career Statistics • All Seasons</p>
              </div>
              <a
                href={cricketData.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1"
              >
                View Full Profile →
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Batting Stats */}
              <div className="bg-gray-700/30 rounded-lg p-4">
                <h4 className="text-primary-400 font-semibold mb-3 text-sm uppercase tracking-wide">Batting</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-2xl font-bold text-white">{cricketData.batting.runs}</div>
                    <div className="text-xs text-gray-400">Runs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{cricketData.batting.average}</div>
                    <div className="text-xs text-gray-400">Average</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{cricketData.batting.highScore}</div>
                    <div className="text-xs text-gray-400">High Score</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{cricketData.batting.hundreds}/{cricketData.batting.fifties}</div>
                    <div className="text-xs text-gray-400">100s/50s</div>
                  </div>
                </div>
              </div>

              {/* Bowling Stats */}
              <div className="bg-gray-700/30 rounded-lg p-4">
                <h4 className="text-primary-400 font-semibold mb-3 text-sm uppercase tracking-wide">Bowling</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-2xl font-bold text-white">{cricketData.bowling.wickets}</div>
                    <div className="text-xs text-gray-400">Wickets</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{cricketData.bowling.average}</div>
                    <div className="text-xs text-gray-400">Average</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{cricketData.bowling.bestBowling}</div>
                    <div className="text-xs text-gray-400">Best Bowling</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{cricketData.bowling.economy}</div>
                    <div className="text-xs text-gray-400">Economy</div>
                  </div>
                </div>
              </div>

              {/* Fielding Stats */}
              <div className="bg-gray-700/30 rounded-lg p-4">
                <h4 className="text-primary-400 font-semibold mb-3 text-sm uppercase tracking-wide">Fielding</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-2xl font-bold text-white">{cricketData.fielding.catches}</div>
                    <div className="text-xs text-gray-400">Catches</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{cricketData.fielding.runOuts}</div>
                    <div className="text-xs text-gray-400">Run Outs</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{cricketData.batting.innings}</div>
                    <div className="text-xs text-gray-400">Innings</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{cricketData.position}</div>
                    <div className="text-xs text-gray-400">Role</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* My Cricket Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-16"
          >
            <h3 className="text-xl font-bold text-white mb-3">My Cricket Journey</h3>
            <p className="text-gray-400 leading-relaxed">
              {cricketData.introduction}
            </p>
          </motion.div>

          {/* Photo Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Photo Gallery
            </h2>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cricketData.photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer border border-gray-700 hover:border-primary-400 transition-colors"
                onClick={() => openLightbox(photo, index)}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-medium text-sm line-clamp-2">
                    {photo.caption}
                  </p>
                  {photo.location && (
                    <p className="text-gray-300 text-xs mt-1 flex items-center gap-1">
                      <FiMapPin className="w-3 h-3" /> {photo.location}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State for Photos */}
          {cricketData.photos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <GiBowlingStrike className="text-gray-600 text-6xl mx-auto mb-4" />
              <p className="text-gray-400 text-xl">No photos added yet</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Books Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          {/* Books Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <IoBookSharp className="text-primary-400" />
              Books I'm Reading
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {booksData.introduction}
            </p>
          </motion.div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {booksData.books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-primary-400/50 transition-all">
                  {/* Book Cover */}
                  <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary-500/10 to-purple-500/10">
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Book Info */}
                  <div className="p-4">
                    <span className="text-xs text-primary-400 font-medium">{book.category}</span>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-primary-400 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">by {book.author}</p>
                    <p className="text-xs text-gray-400 italic">
                      "{book.keyTakeaway}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Community Events Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <HiUsers className="text-primary-400" />
              Community Events
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {communityEventsData.introduction}
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityEventsData.events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-primary-400/50 transition-all h-full flex flex-col">
                  {/* Event Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Type Badge */}
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                      event.type === 'speaking'
                        ? 'bg-blue-500/80 text-white'
                        : event.type === 'award'
                        ? 'bg-yellow-500/80 text-white'
                        : 'bg-pink-500/80 text-white'
                    }`}>
                      <event.icon className="w-3 h-3" />
                      {event.type === 'speaking' ? 'Speaking' : event.type === 'award' ? 'Award' : 'Charity'}
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 flex-1">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <FiMapPin className="w-3 h-3" />
                      {event.venue}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-500/10 via-primary-500/10 to-green-500/10 border border-primary-400/20 rounded-lg p-8"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Share common interests?
          </h3>
          <p className="text-gray-400 mb-6">
            Always looking for like-minded people to connect with. Whether it's cricket, tech, community events, or other interests - let's chat!
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <FiX className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto("prev");
              }}
              className="absolute left-4 text-white hover:text-primary-400 transition-colors z-10"
              aria-label="Previous photo"
            >
              <FiChevronLeft className="w-12 h-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto("next");
              }}
              className="absolute right-4 text-white hover:text-primary-400 transition-colors z-10"
              aria-label="Next photo"
            >
              <FiChevronRight className="w-12 h-12" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />

              {/* Photo Info */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-bold mb-2">
                  {selectedPhoto.caption}
                </h3>
                <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
                  {selectedPhoto.date && (
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>
                        {new Date(selectedPhoto.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  )}
                  {selectedPhoto.location && (
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      <span>{selectedPhoto.location}</span>
                    </div>
                  )}
                </div>
                {selectedPhoto.event && (
                  <p className="text-primary-400 text-sm mt-2">
                    {selectedPhoto.event}
                  </p>
                )}
                <p className="text-gray-500 text-xs mt-4">
                  {currentIndex + 1} / {cricketData.photos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
