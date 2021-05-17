def to_camel_case(text):
    
    if '_' in text:
        text = text.replace('_', '-')
    res = []
    
    for word in text.split('-')[1:len(text)+1]:
        res.append(word.capitalize())  
        
    return text.split('-')[0] + ''.join(res)
