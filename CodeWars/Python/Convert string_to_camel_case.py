def to_camel_case(text):
    if '_' in text:
        text = text.replace('_', '-')
    words = text.split('-')[1:len(text)+1]
    first = text.split('-')[0]
    res = []
    for word in words:
        res.append(word.capitalize())
    return first + ''.join(res)