~~~~~~~𝗔𝗿𝗿𝗮𝘆~~~~~~~
•1• 𝐚𝐫𝐫𝐚𝐲.𝐮𝐧𝐬𝐡𝐢𝐟𝐭(" ");
•2• 𝐚𝐫𝐫𝐚𝐲.𝐩𝐮𝐬𝐡 (" ");
•3• 𝐚𝐫𝐫𝐚𝐲.𝐬𝐡𝐢𝐟𝐭(" ");
•4• 𝐚𝐫𝐫𝐚𝐲.𝐩𝐨𝐩(" ");
•5• 𝐚𝐫𝐫𝐚𝐲.𝐢𝐧𝐝𝐞𝐱𝐎𝐟(" ");
•6• 𝐚𝐫𝐫𝐚𝐲(𝖎𝖓𝖉𝖊𝖝_𝖓𝖆𝖒𝖊) = 𝖘𝖊𝖙 𝖛𝖆𝖑𝖚𝖊;
•7• 𝐚𝐫𝐫𝐚𝐲(𝖎𝖓𝖉𝖊𝖝_𝖓𝖆𝖒𝖊);
•8• 𝐚𝐫𝐫𝐚𝐲.𝐬𝐥𝐢𝐜𝐞(𝖋𝖗𝖔𝖒,𝖙𝖔);

~~~~~~~𝐒𝐭𝐫𝐢𝐧𝐠 ~~~~~~
•1• 𝐬𝐭𝐫𝐢𝐧𝐠.𝐩𝐚𝐫𝐬𝐞𝐈𝐧𝐭();
•2• 𝐬𝐭𝐫𝐢𝐧𝐠.𝐩𝐚𝐫𝐬𝐞𝐅𝐥𝐨𝐚𝐭();
•3• 𝐬𝐭𝐫𝐢𝐧𝐠.𝐢𝐧𝐜𝐥𝐮𝐝𝐞𝐬("𝖊𝖑𝖊𝖒𝖊𝖓𝖙 𝖓𝖆𝖒𝖊");
•4• 𝐬𝐭𝐫𝐢𝐧𝐠.𝐬𝐮𝐛𝐬𝐭𝐫𝐢𝐧𝐠(𝖋𝖗𝖔𝖒,𝖙𝖔);
•5• 𝐬𝐭𝐫𝐢𝐧𝐠(𝖎𝖓𝖉𝖊𝖝_𝖓𝖆𝖒𝖊);

        
••••••••••••••𝗔𝗿𝗿𝗮𝘆•••••••••••••• 

1•• Array এর ফার্ষ্টে ইলিমেন্ট এড করতে চাইলে : 
Array.unshift(" ");

2•• Array এর লাষ্টে ইলিমেন্ট এড করতে চাইলে : 
Array.push(" ");

3•• Array এর ফার্ষ্ট  ইলিমেন্ট বের করে দিতে চাইলে : 
Array.shift(" ");

4•• Array এর লাষ্ট ইলিমেন্ট বের করে দিতে চাইলে : 
Array.pop(" ");

5••Array এর কোন ইলিমেন্ট কত নাম্বার ইনডেক্সে আছে তা দেখতে চাইলে : 

অথবা এটাকে এভাবেও একটু ঘুরিয়ে পেঁচিয়ে বলা যায় :

কোনো নির্দিষ্ট ইলিমেন্ট আসলেই Array-র মধ্যে আছে কিনা বা আসলেই এক্সিষ্ট করে কিনা তা দেখার জন্য :
Array.indexOf(" ");

6•• কোনো ইনডেক্সের মান চেন্জ করে নতুন মান সেট করতে Array(Index_name) = Set value ;     

7•• কোনো ইনডেক্সে , কি মান আছে তা জানার জন্য :
Array(Index_name);

8•• Array থেকে নির্দিষ্ট কিছু অংশ কেটে ফেলা দেয়ার জন্য { ইনডেক্সিং অনুসারে } :
Array.slice(from,to); 

~~~𝗔𝗿𝗿𝗮𝘆_𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲~~~

••••••••••••••𝗦𝘁𝗿𝗶𝗻𝗴•••••••••••••
𝒍𝒆𝒕 𝒔𝒕𝒓𝒊𝒏𝒈 = “ 𝑴𝒚 𝒏𝒂𝒎𝒆 𝒊𝒔 ”     

string থেকে integer এ চেন্জ করার জন্য: 
string.parseInt();

string থেকে floating এ চেন্জ করার জন্য: 
string.parseFloat();

কোনো নির্দিষ্ট ইলিমেন্ট আসলেই String-র মধ্যে আছে কিনা বা আসলেই এক্সিষ্ট করে কিনা তা দেখার জন্য :
string.includes("Element Name");

string থেকে নির্দিষ্ট কিছু অংশ কেটে ফেলা দেয়ার জন্য { ইনডেক্সিং অনুসারে } :
string.substring(from,to); 

কোনো ইনডেক্সে , কি মান আছে তা জানার জন্য :
string(index_name);
{[[তবে array এর মতো কোনো অংশের মান চেন্জ করতে বা নতুন করে সেট করতে পারবা না , শুধু দেখতে পারবা]]}