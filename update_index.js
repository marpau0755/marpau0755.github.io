const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const replacement = `<div class="grid">
        <div class="card card-drivelogs">
          <div class="card-header">
            <img src="assets/images/logos/drivelogs.png" alt="DriveLogs Logo" class="project-logo" />
            <strong>DriveLogs LLC</strong>
          </div>
          <div class="card-body">
            <p>Track your driving hours with GPS accuracy, certify parent drives, and meet DMV requirements. Includes free permit practice exams covering signals, road signs, and driving safety—trusted by students nationwide.</p>
            <ul>
              <li><a href="https://www.drivelogsusa.com/" target="_blank" rel="noopener">Website</a></li>
              <li><a href="https://www.drivelogsusa.com/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a></li>
              <li><a href="https://www.drivelogsusa.com/terms-and-conditions" target="_blank" rel="noopener">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>

        <div class="card card-dinnerroll">
          <div class="card-header">
            <img src="assets/images/logos/dinnerroll.png" alt="Dinner Roll Logo" class="project-logo" />
            <strong>Dinner Roll</strong>
          </div>
          <div class="card-body">
            <p>Mobile app that curates recipes and restaurant suggestions.</p>
            <ul>
              <li><a href="https://dinnerroll.app/" target="_blank" rel="noopener">Website</a></li>
              <li><a href="https://marpau0755.github.io/dinnerroll-privacy/" target="_blank" rel="noopener">Privacy Policy</a></li>
              <li><a href="mailto:dinnerroll.contact@gmail.com">Support Email</a></li>
            </ul>
          </div>
        </div>

        <div class="card card-cofinance">
          <div class="card-header">
            <img src="assets/images/logos/cofinance.png" alt="CoFinance Logo" class="project-logo" />
            <strong>CoFinance</strong>
          </div>
          <div class="card-body">
            <p>Collaborative budgeting platform for households and teams.</p>
            <ul>
              <li><a href="https://marpau0755.github.io/cofinance-privacy/" target="_blank" rel="noopener">Privacy Policy</a></li>
              <li><a href="https://marpau0755.github.io/cofinance-privacy/support.html" target="_blank" rel="noopener">Support</a></li>
              <li><a href="https://marpau0755.github.io/cofinance-privacy/terms.html" target="_blank" rel="noopener">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>

        <div class="card card-tophundred">
          <div class="card-header">
            <img src="assets/images/logos/tophundred.png" alt="Top Hundred Logo" class="project-logo" />
            <strong>Top Hundred</strong>
          </div>
          <div class="card-body">
            <p>Compete with players worldwide to find the top 100 words for each category!</p>
            <ul>
              <li><a href="https://tophundred.web.app/" target="_blank" rel="noopener">Website</a></li>
            </ul>
          </div>
        </div>

        <div class="card card-dailyscramble">
          <div class="card-header">
            <img src="assets/images/logos/dailyscramble.png" alt="Daily Scramble Logo" class="project-logo" />
            <strong>Daily Scramble</strong>
          </div>
          <div class="card-body">
            <p>Challenge your mind every day with Daily Scramble. Engaging in word puzzles is more than just fun; it's a powerful exercise for your brain. Regular play can help improve your vocabulary, enhance your concentration span, and boost cognitive flexibility. Whether you're a linguistic expert or just starting out, making Daily Scramble a part of your morning routine is a great way to stay sharp and jumpstart your day!</p>
            <ul>
              <li><a href="https://dailyscramble.web.app" target="_blank" rel="noopener">Website</a></li>
            </ul>
          </div>
        </div>

        <div class="card card-worldofjokesai">
          <div class="card-header">
            <img src="assets/images/logos/worldofjokesai.png" alt="World of Jokes AI Logo" class="project-logo" />
            <strong>World of Jokes AI</strong>
          </div>
          <div class="card-body">
            <p>Explore, share, and archive thousands of jokes across 10+ premium categories.</p>
            <ul>
              <li><a href="https://worldofjokesai.web.app/" target="_blank" rel="noopener">Website</a></li>
            </ul>
          </div>
        </div>

        <div class="card card-eleganceva">
          <div class="card-header">
            <img src="assets/images/logos/eleganceva.png" alt="Elegance by Christina Logo" class="project-logo" />
            <strong>Elegance by Christina</strong>
          </div>
          <div class="card-body">
            <p>Hand-crafted floral elegance customized for every occasion in Chesterfield, VA.</p>
            <ul>
              <li><a href="https://eleganceva.web.app/" target="_blank" rel="noopener">Website</a></li>
            </ul>
          </div>
        </div>

        <div class="card card-crossholdem">
          <div class="card-header">
            <img src="assets/images/logos/crossholdem.png" alt="Cross Poker Logo" class="project-logo" />
            <strong>Cross Poker</strong>
          </div>
          <div class="card-body">
            <p>The five-card cross poker game. Live rooms, ranked lobbies.</p>
            <ul>
              <li><a href="https://crossholdem.web.app" target="_blank" rel="noopener">Website</a></li>
            </ul>
          </div>
        </div>

        <div class="card card-theepiccapsule">
          <div class="card-header">
            <img src="assets/images/logos/theepiccapsule.png" alt="The Epic Capsule Logo" class="project-logo" />
            <strong>The Epic Capsule</strong>
          </div>
          <div class="card-body">
            <p>The definitive digital time capsule. Claim your legacy on the eternal panoramic canvas.</p>
            <ul>
              <li><a href="https://theepiccapsule.web.app/" target="_blank" rel="noopener">Website</a></li>
            </ul>
          </div>
        </div>
      </div>`;

// Split the string at <h2>Projects</h2>
const parts = html.split('<h2>Projects</h2>');
if (parts.length === 2) {
    // The second part contains the <div class="grid"> we want to replace
    // We want to replace everything from <div class="grid"> to the next </section>
    let secondPart = parts[1];
    secondPart = secondPart.replace(/<div class="grid">[\s\S]*?<\/div>\s*<\/section>/, replacement + '\n    </section>');
    html = parts[0] + '<h2>Projects</h2>' + secondPart;
    fs.writeFileSync('index.html', html);
    console.log('HTML updated successfully.');
} else {
    console.log('Error: Could not find <h2>Projects</h2>');
}
