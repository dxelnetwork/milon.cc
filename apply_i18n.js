const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Navbar Replacements
  content = content.replace(/>\s*Home\s*<span/g, '><span data-i18n="nav_home">Home</span><span');
  content = content.replace(/>\s*About\s*<span/g, '><span data-i18n="nav_about">About</span><span');
  content = content.replace(/>\s*Services\s*<span/g, '><span data-i18n="nav_services">Services</span><span');
  content = content.replace(/>\s*Projects\s*<span/g, '><span data-i18n="nav_projects">Projects</span><span');
  content = content.replace(/>\s*Blogs\s*<span/g, '><span data-i18n="nav_blogs">Blogs</span><span');
  content = content.replace(/>\s*Contact\s*<span/g, '><span data-i18n="nav_contact">Contact</span><span');
  
  content = content.replace(/>\s*Contact Me\s*<svg/g, '><span data-i18n="nav_cta">Contact Me</span><svg');
  
  // Contact Form Text
  content = content.replace(/>\s*Let's talk about your project\s*<\/h3>/g, ` data-i18n="contact_heading">Let's talk about your project</h3>`);
  content = content.replace(/>\s*I'm always interested in hearing about new projects and\s*opportunities\. Whether you have a question or just want to say\s*hi, feel free to reach out!\s*<\/p>/g, ` data-i18n="contact_subheading">I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>`);
  
  content = content.replace(/>\s*Email\s*<\/div>/g, ' data-i18n="contact_email">Email</div>');
  content = content.replace(/>\s*Phone\s*<\/div>/g, ' data-i18n="contact_phone">Phone</div>');
  content = content.replace(/>\s*Location\s*<\/div>/g, ' data-i18n="contact_location">Location</div>');
  content = content.replace(/>\s*Follow me on social media\s*<\/div>/g, ' data-i18n="contact_follow">Follow me on social media</div>');

  content = content.replace(/>\s*Your Name\s*<\/label>/g, ' data-i18n="form_name">Your Name</label>');
  content = content.replace(/placeholder="John Doe"/g, 'data-i18n="form_name_ph" placeholder="John Doe"');
  
  content = content.replace(/>\s*Your Email\s*<\/label>/g, ' data-i18n="form_email">Your Email</label>');
  content = content.replace(/placeholder="john@example.com"/g, 'data-i18n="form_email_ph" placeholder="john@example.com"');
  
  content = content.replace(/>\s*Subject\s*<\/label>/g, ' data-i18n="form_subject">Subject</label>');
  content = content.replace(/placeholder="Project Inquiry"/g, 'data-i18n="form_subject_ph" placeholder="Project Inquiry"');
  
  content = content.replace(/>\s*Message\s*<\/label>/g, ' data-i18n="form_message">Message</label>');
  content = content.replace(/placeholder="Tell me about your project..."/g, 'data-i18n="form_message_ph" placeholder="Tell me about your project..."');
  
  content = content.replace(/>\s*Send Message\s*<svg/g, '><span data-i18n="form_submit">Send Message</span><svg');
  
  fs.writeFileSync(file, content, 'utf-8');
});
console.log('Applied data-i18n attributes successfully.');
