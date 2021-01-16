
fun retreiveData(networkConnected: Boolean): String {
    if (networkConnected == true)
    	return CloudStorage.getRemoteData()
    else
    	return DeviceStorage.getLocalData()
}

object DeviceStorage {
	// Single expression syntax
    fun getLocalData() = ""
}

object CloudStorage {
	// Single expression syntax
    fun getRemoteData() = ""
}
