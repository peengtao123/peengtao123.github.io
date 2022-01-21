# Dubbo2.7.5连接zookeeper时报错： zookeeper not connected
其中默认的超时时间是
```java
protected int DEFAULT_CONNECTION_TIMEOUT_MS = 5000;
```
```xml
<dubbo:registry address="zookeeper://106.75.177.44:2181?timeout=600000"/>
```