from nltk.chat.util import Chat, reflections
rules = [
    [
        r"hi|hey|hello",
        ["Hello", "Hey there","Hello sir"]
    ],
    [
        r"my name is (.*)",
        ["Hello %1, How are you?",]
    ],
    [
        r"is something new there (.*)",
        ["Yeah! Its a new day.","Nope. Same as always :)"]
    ],
    [
        r"is something new there",
        ["Yeah! Its a new day.","Nope. Same as always :)"]
    ],
    [
        r"what is your name ?",
        ["I am AI bot created by Ujjwal Chaturvedi. You can call me dude.","I don't have any specific name you can call me Dude:)"]
    ],
    [
        r"how are you ?",
        ["I'm doing good. How about You ?",]
    ],
    [
        r"sorry (.*)",
        ["Alright","No problem.","Its OK, never mind",]
    ],
    [
        r"sorry",
        ["Alright","No problem.","Its OK, never mind",]
    ],
    [
        r"I am fine",
        ["Good to hear that, How can I help you?",]
    ],
    [
        r"i am doing good",
        ["Nice to hear that","How can I help you?",]
    ],
    [
        r"i (.*) good",
        ["Nice to hear that","How can I help you?",]
    ],
    [
        r"(.*) age?",
        ["I was developed on August 2023",]
    ],
    [
        r"what (.*) want ?",
        ["Make me an offer I can't refuse",]
    ],
    [
        r"(.*) created you ?",
        ["I'm an AI program developed by Ujjwal Chaturvedi","can't tell you that ;)"]
    ],
    [
        r"where were you developed",
        ['Bhopal, Madhya Pradesh','Somewhere on this Earth ;)']
    ],
    [
        r"when were you born",
        ["I was programmed in August 2023","I was programmed dude.","I don't have any birthday."]
    ],
    [
        r"i work in (.*)?",
        ["%1 is an Amazing company. I have heard that they provide free internship to college students.",]
    ],
    [
        r"can you give me codsoft website",
        ["Yeah sure! It's https://www.codsoft.in/","Why not. It's https://www.codsoft.in/"]
    ],
    [
        r"quit",
        ["Bye bye sir ","It was nice talking to you. See you soon :)"]
    ],
    [
        r"bye",
        ["Bye bye sir ","It was nice talking to you. See you soon :)"]
    ],
]
def chatBOT():
    print("Hi! I am DUDE, a chatbot created by Ujjwal Chaturvedi.")
    chatbot = Chat(rules, reflections)
    chatbot.converse()
#initiating chatBOT 
if __name__ == "__main__":
    chatBOT()
